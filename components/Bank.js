import React, {Component} from 'react'
import {View, StyleSheet, StatusBar, ScrollView, KeyboardAvoidingView, Image} from 'react-native'
import {Text, Form, Item, Input, Label, Icon, Picker, Button} from 'native-base'
import {Actions} from 'react-native-router-flux'
export default class Bank extends Component {
  constructor (props) {
    super(props)
    this.state = {
       selected: undefined,
       banks:[]
    }
    this.banks = []
  }
  componentDidMount () {
    fetch('https://ravesandboxapi.flutterwave.com/banks').then(res => res.json()).then(data => {
      this.banks = data.data
      this.setState({banks:this.banks})
    })
  }
  onValueChange(value: string) {
   this.setState({
     selected: value
   });
 }
  render () {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView styles={styles.scrollview}>
          <View style={styles.header}>
            <Text style={styles.title}>JustPay.ng</Text>
            <Text style={styles.subtitle}>Just pay, effortlessly</Text>
          </View>
          <KeyboardAvoidingView behavior="padding" enabled>
            <Form style={styles.form}>
              <View style={styles.input}>
                <Label style={styles.label}>Select Bank:</Label>
                <Picker
                      mode="dropdown"
                      iosIcon={<Icon name="ios-arrow-down-outline" />}
                      placeholder="Choose your bank..."
                      placeholderStyle={{ color: "black" }}
                      placeholderIconColor="#bfc6ea"
                      style={{ width: '100%', backgroundColor:'white' }}
                      selectedValue={this.state.selected}
                      onValueChange={this.onValueChange.bind(this)}
                    >
                      {this.state.banks.map((bank, key)=>
                        <Picker.Item key={key} label={bank.name} value={bank.code} />
                      )}

                </Picker>
              </View>
              <View style={styles.input}>
                <Label style={styles.label}>Account Number:</Label>
                        <Item regular>
                          <Input style={{backgroundColor:'white'}} keyboardType={'numeric'} placeholder='Account number...' />
                        </Item>
                <Text style={styles.info}>Enter the account number of the provided bank above</Text>
              </View>

              <View style={styles.button}>
                <Button onPress={Actions.Profile} primary><Text> Continue </Text></Button>
              </View>
              </Form>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#0064B7'
  },
  header:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:60,
    marginBottom:30
  },
  title:{
    fontSize:35,
    color:'white',
    fontFamily:'Helvetica-Bold'
  },
  subtitle:{
    color:'white',
    fontSize:12,
    fontStyle:'italic'
  },
  form:{
    marginTop:30,
  },
  input:{
    margin:20
  },
  otp:{
    color:'white',
    padding:10,
    fontSize:14,
    textAlign:'right'
  },
  label:{
    color:'white',
    fontSize:20
  },
  info:{
    fontSize:10,
    fontStyle:'italic',
    color:'#BFBFBF',
    padding:5
  },
  button:{
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
  },
  imageContainer:{
    margin:10,
    padding:10,
    alignItems:'center',
    justifyContent:'center'
  },
  image:{
    height:100,
    width:100,
    resizeMode:'contain'
  },
  inputField:{
    color:'white'
  }
})
