import React, {Component} from 'react'
import {View, StyleSheet, StatusBar, ScrollView, KeyboardAvoidingView, Image} from 'react-native'
import {Text, Form, Item, Input, Label, Icon, Button} from 'native-base'
import {Actions} from 'react-native-router-flux';
import firebase from 'react-native-firebase';
export default class CardOtp extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  confirmCode = () => {
    const { codeInput } = this.state;
    if (this.props.confirmResult && codeInput.length) {
      let confirmResult = this.props.confirmResult
      confirmResult.confirm(codeInput)
        .then((user) => {
          return Actions.Profile()
        })
        .catch(error => {
          alert("Errors")
        });
    }
  };
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
