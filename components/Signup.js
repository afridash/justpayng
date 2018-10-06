import React, {Component} from 'react';
import {View, StyleSheet, StatusBar, Dimensions, ScrollView, KeyboardAvoidingView} from 'react-native';
import {Text, Form, Item, Input, Label, Icon, Button} from 'native-base';
import {Actions} from 'react-native-router-flux';
import Base64 from 'react-native-base64';
import AesCrypto from 'react-native-aes-kit';
import firebase from 'react-native-firebase';
export default class Signup extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hash:'',
      aes_key:'',
      iv_key:'',
      bvn:'22368566143',
      phoneNumber:'+2349037233559'
    }
  }
  componentDidMount () {
    let base64 = Base64.encode(this.state.bvn)
    fetch('https://hackathon.nibss-plc.com.ng/hackathon/GenerateCredentials', {
      method:'POST',
      mode:'cors',
      headers: {
        'content-type':'application/json',
        'accept':'application/json',
        'UserCode': base64
      }
    }).then(res => {
    this.setState({
      hash:res.headers.map.hash,
      aes_key:res.headers.map.aes_key,
      iv_key:res.headers.map.ivkey
    });
    console.log(res.headers.map);
    }
    ).catch(error => {
      alert(error)
    })
  }
  submitBVN = () => {
    var json = {
      BVN:Base64.encode(this.state.bvn)
    }
    let string = JSON.stringify(json)
    let encryptedString = AesCrypto.encrypt(string, this.state.aes_key, this.state.iv_key)
    let base64 = Base64.encode(encryptedString.toString())
    fetch('https://hackathon.nibss-plc.com.ng/hackathon/BVNSearch',{
      method:'POST',
      mode:'cors',
      headers:{
        'content-type':'application/json',
        'accept':'application/json',
        'hash':this.state.hash
      },
      body:base64
    }).then(res => {
      this.signIn()
    }).catch(errror => {
      alert(errror)
    })
  }
  signIn = () => {
    const { phoneNumber } = this.state;
    this.setState({ message: 'Sending code ...' });
    firebase.auth().signInWithPhoneNumber(phoneNumber)
      .then(confirmResult => {
        this.setState({confirmResult:confirmResult})
      })
      .catch(error => {
        //alert(error.message)
        this.setState({confirmResult:true})
     });

  };
  confirmCode = () => {
    const { codeInput, confirmResult } = this.state;
    if (confirmResult && codeInput.length) {
      confirmResult.confirm(codeInput)
        .then((user) => {
          //here

        })
        .catch(error => {
          alert("Errors")
        });
    }
      return Actions.Profile();
  };
  renderVerificationCodeInput () {
    return (
      <Form style={styles.form}>
        <View style={styles.input}>
          <Label style={styles.label}>Phone Number:</Label>
                  <Item regular>
                    <Input style={{backgroundColor:'white'}} keyboardType={'numeric'} placeholder='+234 90* *** **59' />
                  </Item>
        </View>
        <View style={styles.input}>
          <Label style={styles.label}>OTP:</Label>
                  <Item regular>
                    <Input onChange={(codeInput) =>this.setState({codeInput})} style={{backgroundColor:'white'}} keyboardType={'numeric'} placeholder='otp..' />
                  </Item>
          <Text style={styles.info}>Enter the one time pin sent to the phone number displayed above</Text>
        </View>

        <View style={styles.button}>
          <Button onPress={this.confirmCode} primary><Text> Continue </Text></Button>
        </View>
        </Form>
    )
  }
  renderPhoneNumberInput () {
    return (
      <Form style={styles.form}>

        <View style={styles.input}>
          <Label style={styles.label}>Enter BVN:</Label>
                  <Item regular>
                    <Input onChange={(text)=>this.setState({bvn:text})} style={{backgroundColor:'white'}} keyboardType={'numeric'} placeholder='BVN Number' value={this.state.bvn} />
                  </Item>
          <Text style={styles.info}>Enter your eleven (11) digits bank verification number</Text>
        </View>

        <View style={styles.button}>
          <Button onPress={this.submitBVN} primary><Text> Continue </Text></Button>
        </View>
        </Form>
    )
  }
  render () {
    const { user, confirmResult } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView styles={styles.scrollview}>
          <View style={styles.header}>
            <Text style={styles.title}>JustPay.ng</Text>
            <Text style={styles.subtitle}>Just pay, effortlessly</Text>
          </View>
          <KeyboardAvoidingView behavior="padding" enabled>
            {!user && !confirmResult && this.renderPhoneNumberInput()}
            {!user && confirmResult && this.renderVerificationCodeInput()}
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
