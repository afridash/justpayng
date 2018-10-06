import React, {Component} from 'react'
import {View, StyleSheet, StatusBar, TouchableHighlight, Alert} from 'react-native'
import {Text, Label, Icon, Button, Image} from 'native-base'
import {Actions} from 'react-native-router-flux';
import Fingerprint from './Finger';
export default class Setpin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pin:'',
      confirmPin:'',
      length:0,
      temp:'',
      instruction:'Choose 4 digit pin'
    }
  }
  show () {
    Alert.alert(
  'FingerPrint Authentication',
  'Allow device to use fingerprint?',
  [
    {text: 'Yes', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'NO', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
)
  }
  addDigit (digit) {
    if (this.state.length < 4 && !this.state.confirming) {
      this.setState({pin:this.state.pin+digit, length:this.state.length + 1, temp:this.state.temp +'*'})
    }else if (this.state.length < 4 && this.state.confirming) {
      this.setState({confirmPin:this.state.confirmPin+digit, length:this.state.length + 1, temp:this.state.temp +'*'})
    }
  }
  removeDigit = () => {
    if (!this.state.confirming) {
      let pin = this.state.pin.substring(0, this.state.pin.length-1)
      let temp = this.state.temp.substring(0, this.state.temp.length-1)
      this.setState({pin, length:this.state.length - 1, temp})
    }else {
      let confirmPin = this.state.confirmPin.substring(0, this.state.confirmPin.length-1)
      let temp = this.state.temp.substring(0, this.state.temp.length-1)
      this.setState({confirmPin, length:this.state.length - 1, temp})
    }

  }
  reEnterPassword = () => {
    this.setState({reenter:true, length:0, temp:'', instruction:'Confirm 4 digit pin', confirming:true})
  }
  confirm = () => {
    if (this.state.pin === this.state.confirmPin) {
        this.setState({authenticated:true})

    }else{
      alert("Pins do not match! Try again")
      this.setState({reenter:false, length:0, temp:'', instruction:'Choose 4 digit pin', confirming:false, pin:'', confirmPin:''})
    }
  }
  handlePopupDismissed = () => {
    return Actions.Contacts()
  }
  render () {
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.title}>JustPay.ng</Text>
          <Text style={styles.subtitle}>Just pay, effortlessly</Text>
        </View>
        <Text style={styles.instruction}>{this.state.instruction}</Text>
        <View style={styles.container1}>
          <View style={{width:50}}></View>
          <View style={styles.pinContainer}>
            <Text style={styles.pin}>{this.state.temp}</Text>
          </View>
          {this.state.length > 0 &&
          <Button transparent onPress={this.removeDigit}>
            <Icon name="ios-backspace" style={{fontSize:35, color:'white'}} />
          </Button>
        }
        </View>
        <View style={styles.numbersContainer}>
          <View style={styles.set}>
            <TouchableHighlight style={styles.highlight} underlayColor='white' activeOpacity={0.7} onPress={()=>this.addDigit('1')}>
              <Text style={styles.number}>1</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.highlight} underlayColor='white' activeOpacity={0.7} onPress={()=>this.addDigit('2')}>
              <Text style={styles.number}>2</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.highlight} underlayColor='white' activeOpacity={0.7} onPress={()=>this.addDigit('3')}>
              <Text style={styles.number}>3</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.set}>
            <TouchableHighlight style={styles.highlight} underlayColor='white' activeOpacity={0.7} onPress={()=>this.addDigit('4')}>
              <Text style={styles.number}>4</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.highlight} underlayColor='white' activeOpacity={0.7} onPress={()=>this.addDigit('5')}>
              <Text style={styles.number}>5</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.highlight} underlayColor='white' activeOpacity={0.7} onPress={()=>this.addDigit('6')}>
              <Text style={styles.number}>6</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.set}>
            <TouchableHighlight style={styles.highlight} underlayColor='white' activeOpacity={0.7} onPress={()=>this.addDigit('7')}>
              <Text style={styles.number}>7</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.highlight} underlayColor='white' activeOpacity={0.7} onPress={()=>this.addDigit('8')}>
              <Text style={styles.number}>8</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.highlight} underlayColor='white' activeOpacity={0.7} onPress={()=>this.addDigit('9')}>
              <Text style={styles.number}>9</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.set}>
            <Text style={styles.number}></Text>
            <TouchableHighlight style={styles.highlight} underlayColor='white' activeOpacity={0.7} onPress={()=>this.addDigit('0')}>
              <Text style={styles.number}>0</Text>
            </TouchableHighlight>
            <Text style={styles.number}></Text>
          </View>

        </View>

        <View style={styles.buttonContainer}>
          {this.state.length === 4 &&
            <View >
              {this.state.reenter ?
                <TouchableHighlight onPress={()=>this.confirm()} >
                <Text style={styles.button}> Confirm </Text>
              </TouchableHighlight> :
              <TouchableHighlight onPress={this.reEnterPassword} >
                <Text style={styles.button}> Continue </Text>
              </TouchableHighlight>}
            </View>
        }
        </View>
        {this.state.authenticated && <Fingerprint handlePopupDismissed={this.handlePopupDismissed} />}
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
    marginBottom:10,
    flex:0.6
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
  instruction:{
    color:'white',
    fontSize:18,
    padding:10,
    margin:10
  },
  buttonContainer:{
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    flex:0.5,
  },
  numbersContainer:{
    flex:2,
    padding:20,
    marginLeft:30,
    marginRight:30
  },
  set:{
    flexDirection:'row',
    justifyContent:'space-between',
    flex:1
  },
  number:{
    fontSize:35,
    color:'white'
  },
  highlight:{
    alignItems:'center',
    justifyContent:'center',
    padding:10,
    height:70,
    width:70,
    borderRadius:35,
  },
  container1:{
    flex:0.3,
    flexDirection:'row',
    padding:10,
    alignItems:'center',
    justifyContent:'space-between'
  },
  pinContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  pin:{
    fontSize:50,
    color:'white',
    fontFamily:'Helvetica-Bold',
  },
  button:{
    color:'white',
    backgroundColor:'#0091EA',
    borderRadius:5,
    borderWidth:0.5,
    padding:12,
    overflow:'hidden',
    borderColor:'transparent',
  }
})
