import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Button,Left, Right, Text, Body } from "native-base";
import {FlatList, StyleSheet, View} from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class Requests extends Component {

  constructor(props){
    super(props);

    this.state = {
      data:[
        {key: 'John Sam'},
        {key: 'Amaka Eze'},
        {key: 'Preye Ebi'},
        {key: 'Joel Tari'},
      ],
    }
  }

  declineRequest = (item) =>{
    let items = this.state.data.filter((it) => it !== item)
    this.setState({data:items})

  }
  render(){
    return(
      <Container>
        <Content padder>
          <FlatList
          data={this.state.data}
          renderItem={
            ({item}) =>
          <Card>
            <CardItem>
              <Text>Request: Time</Text>
            </CardItem>
            <CardItem>
              <Left>
                  <Text>{item.key}</Text>
              </Left>
              <Body>
                <Button success
                onPress = {()=>Actions.payContact({payee:item.key})}><Text> PAY </Text></Button>
              </Body>
              <Right>
                <Button danger
                onPress = {()=>this.declineRequest(item)}><Text> DECLINE </Text></Button>
              </Right>
            </CardItem>
            <CardItem>
              <Text>Requested for: NGN 12,000</Text>
            </CardItem>
          </Card>
          }
        />

        </Content>
      </Container>
    );
  }
}
