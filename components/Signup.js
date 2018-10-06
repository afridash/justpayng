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
                <Label style={styles.label}>Enter BVN:</Label>
                        <Item regular>
                          <Input style={{backgroundColor:'white'}} keyboardType={'numeric'} placeholder='BVN Number' />
                        </Item>
                <Text style={styles.info}>Enter your eleven (11) digits bank verification number</Text>
              </View>

              <View style={styles.button}>
                <Button onPress={Actions.OTP} primary><Text> Continue </Text></Button>
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
    marginTop:50,
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
    fontSize:20,
    marginBottom:15
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
