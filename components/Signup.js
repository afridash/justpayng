import React, {Component} from 'react'
import {View, StyleSheet, StatusBar, Dimensions, ScrollView, KeyboardAvoidingView} from 'react-native'
import {Text, Form, Item, Input, Label, Icon, Button} from 'native-base'
import {Actions} from 'react-native-router-flux'
export default class Signup extends Component {
  constructor (props) {
    super(props)
    this.state = {}
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
                <Item floatingLabel bordered>
                  <Label style={styles.label}>Phone Number</Label>
                  <Input style={styles.inputField} keyboardType={'numeric'} />
                </Item>
                <Text style={styles.otp}>Request OTP</Text>
              </View>
              <View style={styles.input}>
                <Item floatingLabel last>
                  <Label style={styles.label}>OTP</Label>
                  <Input style={styles.inputField} keyboardType={'numeric'} />
                </Item>
                <Text style={styles.info}>Enter pin sent to the phone number provided above. If pin doesn't arrive after 5 minutes, request for a new pin</Text>
              </View>
              <View style={styles.input}>
                <Item success floatingLabel last>
                  <Label style={styles.label}>Username</Label>
                  <Input style={styles.inputField} />
                  <Icon name='checkmark-circle' />
                </Item>
                <Text style={styles.info}>Select a username that will be associated with your account. Transfers would be made using this username</Text>
              </View>
              <View style={styles.button}>
                <Button onPress={Actions.Setpin} primary><Text> Continue </Text></Button>
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
    padding:20
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
  inputField:{
    color:'white'
  }
})
