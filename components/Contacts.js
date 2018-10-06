import React, { Component } from 'react';
import { Container, Content, Header, Card, CardItem, Thumbnail, Text, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class Contacts extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
          </Left>
          <Body>
            <Title>Contacts</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='camera' />
            </Button>
          </Right>
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../assets/1.png')} />
                <Body>
                  <Text>Richard Igbiriki</Text>
                  <Text note>$richietalker</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
