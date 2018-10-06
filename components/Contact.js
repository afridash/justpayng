import React, { Component } from 'react';
import { Container, Content, Header, Card, CardItem, Thumbnail, Text, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { FlatList, ListItem, View, Image, StyleSheet } from "react-native";
import Contacts from 'react-native-contacts';
//import Footer from './Footer';




export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [
        {
                "avatar": "https://randomuser.me/api/portraits/thumb/men/25.jpg",
                "name": "Proxima Avatar",
                "phone": "$0806372512637"
            },
            {
              "avatar": "https://randomuser.me/api/portraits/thumb/men/26.jpg",
                "name": "Ebony Maw",
                "phone": "$0707362512621"
            },
            {
              "avatar": "https://randomuser.me/api/portraits/thumb/men/20.jpg",
                "name": "Black Dwarf",
                "phone": "$0800000323323"
            },
            {
              "avatar": "https://randomuser.me/api/portraits/thumb/men/27.jpg",
                "name": "Mad Titan",
                "phone": "$070200002384"
            },
            {
              "avatar": "https://randomuser.me/api/portraits/thumb/men/28.jpg",
                "name": "Supergiant",
                "phone": "$090900032387"
            },
            {
              "avatar": "https://randomuser.me/api/portraits/thumb/men/29.jpg",
                "name": "Loki",
                "phone": "$070384832933"
            },
            {
                "name": "corvus",
                "phone": "$070238384847"
            },
            {
              "avatar": "https://randomuser.me/api/portraits/thumb/men/19.jpg",
                "name": "Proxima Midnight",
                "phone": "$090837464737"
            },
            {
              "avatar": "https://randomuser.me/api/portraits/thumb/men/30.jpg",
                "name": "Ebony Maw",
                "phone": "$070383273646"
            },
            {
              "avatar": "https://randomuser.me/api/portraits/thumb/men/31.jpg",
                "name": "Black Dwarf",
                "phone": "$093823939303"
            },
            {
              "avatar": "https://randomuser.me/api/portraits/thumb/men/32.jpg",
                "name": "Mad Titan",
                "phone": "$089390230030"
            },
            {
              "avatar": "https://randomuser.me/api/portraits/thumb/men/33.jpg",
                "name": "Supergiant",
                "phone": "$071028337474"
            },
            {
              "avatar": "https://randomuser.me/api/portraits/thumb/men/35.jpg",
                "name": "Loki",
                "phone": "$0903723732838"
            },
            {
              "avatar": "https://randomuser.me/api/portraits/thumb/men/34.jpg",
                "name": "corvus",
                "phone": "$0700000003030"
            }
      ],

    };
  }
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
        <Content padder>
          <FlatList
            data={this.state.users}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) =>
            <Card>
              <CardItem>
                <View style={styles.flatview}>
                  <Image
                    source={{ uri: item.avatar}}
                    style={{height: 70, width: 70, borderRadius: 35}}
                  />
                  <View style={{marginLeft:30}}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.phone}>{item.phone}</Text>
                  </View>
                </View>
              </CardItem>
            </Card>
            }
            keyExtractor={item => item.phone}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  h2text: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
  },
  flatview: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 5,
    borderRadius: 2,
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18,
    marginBottom: 10
  },
  phone: {
    color: 'black'
  }

});
