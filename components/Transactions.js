import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";

export default class Transactions extends Component {
  constructor (props){
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header button onPress={() => alert("Request Sent!!")}>
              <Text>Purchase: Time</Text>
            </CardItem>
            <CardItem>
              <Text>Justin Timberlake</Text>
            </CardItem>
            <CardItem>
              <Text>Your payment of NGN 12,000.00 was successful!</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}
