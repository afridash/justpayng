import React, { Component } from 'react';
import { Container, Content, Header, Card, CardItem, Thumbnail, Text, Left, Body, Right, Button, Icon, Title,  } from 'native-base';
import { FlatList, ListItem, View, Image, StyleSheet, TouchableHighlight,AsyncStorage } from "react-native";
import Contacts from 'react-native-contacts';
import {Actions} from 'react-native-router-flux';
import firebase from 'react-native-firebase';


export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: [
        {
                "avatar": "https://randomuser.me/api/portraits/thumb/men/25.jpg",
                "name": "Proxima Avatar",
                "phone": "+234806372512637",
                "signedup":true

            },
            {
              "avatar": "https://randomuser.me/api/portraits/thumb/men/26.jpg",
                "name": "Ebony Maw",
                "phone": "+234707362512621",
                "signedup":true
            },
            {
              "avatar": "https://randomuser.me/api/portraits/thumb/men/20.jpg",
                "name": "Black Dwarf",
                "phone": "+234800000323323",
                "signedup":false

            },
            {
              "avatar": "https://randomuser.me/api/portraits/thumb/men/27.jpg",
                "name": "Mad Titan",
                "phone": "+23470200002384",
                "signedup":false
            },
            {
              "avatar": "https://randomuser.me/api/portraits/thumb/men/28.jpg",
                "name": "Supergiant",
                "phone": "+23490900032387",
                "signedup":false
            },
            {
              "avatar": "https://randomuser.me/api/portraits/thumb/men/29.jpg",
                "name": "Loki",
                "phone": "+23470384832933",
                "signedup":false
            },
            {
                "name": "corvus",
                "phone": "+23470238384847",
                  "signedup":false
            },
            {
              "avatar": "https://randomuser.me/api/portraits/thumb/men/19.jpg",
                "name": "Proxima Midnight",
                "phone": "+23490837464737",
                "signedup":true
            },
            {
              "avatar": "https://randomuser.me/api/portraits/thumb/men/30.jpg",
                "name": "Ebony Maw",
                "phone": "+23470383273646",
                "signedup":true
            },
            {
              "avatar": "https://randomuser.me/api/portraits/thumb/men/31.jpg",
                "name": "Black Dwarf",
                "phone": "+23493823939303",
                "signedup":false
            },
            {
              "avatar": "https://randomuser.me/api/portraits/thumb/men/32.jpg",
                "name": "Mad Titan",
                "phone": "+23489390230030",
                "signedup":false
            },
            {
              "avatar": "https://randomuser.me/api/portraits/thumb/men/33.jpg",
                "name": "Supergiant",
                "phone": "+23471028337474",
                "signedup":false
            },
            {
              "avatar": "https://randomuser.me/api/portraits/thumb/men/35.jpg",
                "name": "Loki",
                "phone": "+234903723732838",
                "signedup":true
            },
            {
              "avatar": "https://randomuser.me/api/portraits/thumb/men/34.jpg",
                "name": "corvus",
                "phone": "+234700000003030",
                "signedup":true
            }
      ],

    };
    this.ref = firebase.database().ref('users').child('+2349037233559')
  }
  componentDidMount () {
    firebase.messaging().getToken()
      .then(fcmToken => {
        if (fcmToken) {
            this.ref.update({pushToken:fcmToken});
            AsyncStorage.setItem('token', fcmToken);
        } else {
          // user doesn't have a device token yet
      }
  });
  this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen: NotificationOpen) => {
      // Get the action triggered by the notification being opened
      const action = notificationOpen.action;
      // Get information about the notification that was opened
      const notification: Notification = notificationOpen.notification;
      Actions.validateMerchant({payee:'Ogiriki Mabel', operation_type:'pay', amount:"50,000"})
  });
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
              <TouchableHighlight onPress={() => Actions.payContact({payee:item.name})}>
                <CardItem>
                  <View style={styles.flatview}>
                    <Image
                      source={{ uri: item.avatar}}
                      style={{height: 60, width: 60, borderRadius: 30}}
                    />
                    <View style={{marginLeft:30}}>
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={[styles.phone, {color: item.signedup ? '#0064B7' : 'grey'}]}>{item.phone}</Text>
                    </View>
                  </View>
                </CardItem>
              </TouchableHighlight>
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
