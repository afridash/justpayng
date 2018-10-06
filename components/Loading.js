import React, {Component} from 'react'
import {View, StyleSheet, StatusBar, Image} from 'react-native'
import {Text, Form, Item, Input, Label, Icon, Button} from 'native-base'
import {Actions} from 'react-native-router-flux'
export default class Loading extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Image source={require('../assets/loading.gif')} style={styles.image} />
          <Text style={styles.title}>{this.props.message}</Text>
        </View>
          <Text style={styles.subtitle}>Please Wait...</Text>
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
    fontSize:25,
    color:'white',
    fontFamily:'Helvetica-Light',
    padding:10
  },
  subtitle:{
    color:'white',
    fontSize:14,
    fontStyle:'italic',
    textAlign:'center'
  },
  label:{
    color:'white',
    fontSize:20
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
  }
})
