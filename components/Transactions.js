import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
import {FlatList} from 'react-native'

export default class Transactions extends Component {
  constructor (props){
    super(props)
    this.state = {
      data:[
        {key: 'John Sam', amount:"60,000"},
        {key: 'Amaka Eze', amount:"12,000"},
        {key: 'Preye Ebi', amount:"2,000,000"},
        {key: 'Joel Tari', amount:"10,000"},
        {key: 'Ebi Owei', amount:"10,000"},
        {key: 'Amakiri John', amount:"20,000"},
        {key: 'Tarila Tariebi', amount:"23,000"},
      ],
    }
  }
  render () {
    return (
      <Container>
        <Content padder>
          <FlatList
          data={this.state.data}
          renderItem={
            ({item}) =>
            <Card>
              <CardItem>
                <Text style={{fontSize:18, fontWeight:'600'}}>Successfully transferred NGN {item.amount} to {item.key}</Text>
              </CardItem>
              <CardItem>
                <Text style={{fontStyle:'italic'}}>Transfer: Saturday, October 6th</Text>
              </CardItem>

            </Card>
          }
        />

        </Content>
      </Container>
    )
  }
}
