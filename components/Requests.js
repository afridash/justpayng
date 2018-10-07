import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Button,Left, Right, Text, Body } from "native-base";
import {FlatList, StyleSheet, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Requests extends Component {

  constructor(props){
    super(props);

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

  declineRequest = (item) =>{
    let items = this.state.data.filter((it) => it.key !== item.key)
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
              <Body>
                <Text style={{fontSize:18, fontWeight:'600'}}>{item.key} requested for: NGN {item.amount}</Text>
                <View style={{flex:1, flexDirection:'row', alignItems:'space-between'}}>
                  <View style={{margin:10}}>
                    <Button success
                    onPress = {()=>Actions.validateMerchant({payee:item.key, operation_type:'pay', amount:item.amount})}><Text> PAY </Text></Button>
                  </View>
                  <View style={{margin:10}}>
                    <Button transparent
                    onPress = {()=>this.declineRequest(item)}><Text style={{color:'red'}}> DECLINE </Text></Button>
                  </View>
                </View>
              </Body>
            </CardItem>
          </Card>
          }
        />

        </Content>
      </Container>
    );
  }
}
