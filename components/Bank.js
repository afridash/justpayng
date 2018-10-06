import React, {Component} from 'react'
import {View, StyleSheet, StatusBar, ScrollView, KeyboardAvoidingView, Image} from 'react-native'
import {Text, Form, Item, Input, Label, Icon, Picker, Button} from 'native-base'
import {Actions} from 'react-native-router-flux'
export default class Bank extends Component {
  constructor (props) {
    super(props)
    this.state = {
       selected: undefined
    }
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
                      <Picker.Item label="First Bank" value="key0" />
                      <Picker.Item label="Sterling Bank" value="key1" />
                      <Picker.Item label="Union Bank" value="key2" />
                      <Picker.Item label="Stanbic IBTC Bank" value="key3" />
                      <Picker.Item label="Zenith Bank" value="key4" />
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
