import React, {Component} from 'react'
import {View, StyleSheet, StatusBar, TouchableHighlight} from 'react-native'
import {Text, Label, Card, CardItem, Icon, Button, Thumbnail} from 'native-base'
import {Actions} from 'react-native-router-flux'

export default class validateMerchant extends Component {
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
  confirm = () => {
    alert("Paying " + this.state.amount)
  }
  render () {
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.title}>JustPay.ng</Text>
          <Text style={styles.subtitle}>Just pay, effortlessly</Text>
        </View>

        <View>
          <Card>
            <CardItem style={{justifyContent: 'center'}}>
              <Thumbnail source={require('../assets/1.png')}/>
            </CardItem>
            <CardItem style={{justifyContent: 'center'}}>
              <Text style={{fontSize: 25, fontWeight:'bold'}}>Taiwo & Sons Nig. Ltd.</Text>
            </CardItem>
            <CardItem>
              <Text>Merchant ID: 190723576311</Text>
            </CardItem>
            <CardItem>
              <Text>Address: 102 Otioto Road, Yenagoa, Bayelsa State</Text>
            </CardItem>
          </Card>
        </View>

        <View style={{flexDirection:'row', justifyContent:'center', padding: 10}}>
          <Button info onPress={Actions.payMerchant}><Text> CONTINUE </Text></Button>
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
    flex:0.3
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
})
