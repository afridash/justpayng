import React, {Component} from 'react'
import {View, StyleSheet, StatusBar} from 'react-native'
import {Text, Icon, Button} from 'native-base'
import {Actions} from 'react-native-router-flux'
export default class CardAdded extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Icon type="FontAwesome" name="thumbs-up" style={styles.icon} />
          <Text style={styles.title}>Payment Successful! </Text>
          <Text style={styles.subtitle}>Payment to {this.props.payee} was completed successfully</Text>
        </View>
        <View style={styles.button}>
          <Button primary onPress={Actions.Contacts}><Text> Continue </Text></Button>
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
    alignItems:'center',
    justifyContent:'center',
    flex:1
  },
  title:{
    fontSize:30,
    color:'white',
    fontFamily:'Helvetica-Light',
    padding:10
  },
  subtitle:{
    color:'white',
    fontSize:14,
    textAlign:'center'
  },
  button:{
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    margin:10
  },
  icon:{
    fontSize:60,
    color:'white',
  }
})
