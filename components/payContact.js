import React, {Component} from 'react'
import {View, StyleSheet, StatusBar, TouchableHighlight} from 'react-native'
import {Text, Label, Icon, Button, Image} from 'native-base'
import {Actions} from 'react-native-router-flux'
export default class PayContact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      amount:'',
      confirmPin:'',
      length:0,
      temp:''
    }
  }
  addDigit (digit) {
    this.setState({amount:this.state.amount+digit, length:this.state.length + 1})
  }
  removeDigit = () => {
    if (this.state.length > 0) {
      let amount = this.state.amount.substring(0, this.state.amount.length-1)
      this.setState({amount, length:this.state.length - 1})
    }

  }
  render () {
    return (
      <View style={styles.container}>
        <Button onPress={()=>Actions.pop()} transparent style={{marginTop:10}} >
          <Icon name="chevron-left" type="FontAwesome" style={{fontSize:18, color:'white'}} />
        </Button>
      <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.title}>JustPay.ng</Text>
          <Text style={styles.subtitle}>Just pay, effortlessly</Text>
        </View>
        <View style={{justifyContent:'center'}}>
          <Text style={styles.instruction}>{"To: "+ this.props.payee}</Text>
        </View>
        <View style={styles.container1}>
          <View style={{width:50}}></View>
          <View style={styles.pinContainer}>
            <Text style={styles.pin}>{this.state.amount}</Text>
          </View>
          {this.state.length > 0 &&
          <Button transparent onPress={this.removeDigit}>
            <Icon name="ios-backspace" style={{fontSize:30, color:'white', marginBottom:5}} />
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
            <TouchableHighlight style={styles.highlight} underlayColor='white' activeOpacity={0.7} onPress={()=>this.addDigit('.')}>
              <Text style={styles.number}>.</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.highlight} underlayColor='white' activeOpacity={0.7} onPress={()=>this.addDigit('0')}>
              <Text style={styles.number}>0</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.highlight} underlayColor='white' activeOpacity={0.7} onPress={()=>this.addDigit('0')}>
              <Text style={styles.number}></Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:10}}>
          <Button info onPress={()=>Actions.validateMerchant({payee:this.props.payee, operation_type:'request', amount:this.state.amount})}><Text> REQUEST </Text></Button>
          <Button success onPress={()=>Actions.validateMerchant({payee:this.props.payee, operation_type:'pay', amount:this.state.amount})}><Text> PAY </Text></Button>
        </View>
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
    marginTop:40,
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
    fontFamily:'Helvetica-Bold',
    fontSize:20,
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
