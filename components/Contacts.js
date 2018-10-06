import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class Contacts extends Component {
  constructor (props){
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello World, this is Contact</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:20,
    fontWeight:'600'
  }
})
