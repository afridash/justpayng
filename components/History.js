import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Content, Tab, Tabs, Title, Text } from 'native-base';
import Requests from './Requests.js'
import Transactions from './Transactions.js'

export default class Contacts extends Component {
  constructor (props){
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <Container>
        <Tabs>
          <Tab heading="Requests">
            <Requests />
          </Tab>
          <Tab heading="Transactions">
            <Transactions />
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:20,
    fontWeight:'600'
  }
})
