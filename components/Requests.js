import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Button,Left, Right, Text, Body } from "native-base";

export default class Requests extends Component {
  render(){
    return(
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Text>Request: Time</Text>
            </CardItem>
            <CardItem>
              <Left>
                  <Text>Justin Rhyess</Text>
              </Left>
              <Body>
                <Button success><Text> PAY </Text></Button>
              </Body>
              <Right>
                <Button danger><Text> DECLINE </Text></Button>
              </Right>
            </CardItem>
            <CardItem>
              <Text>Requested for: NGN 12,000</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
