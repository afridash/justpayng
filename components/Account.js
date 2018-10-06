import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { Container, Header, Content, Card, CardItem,Left, Right, Body, Title, TouchableHighlight } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux'

export default class Account extends Component {
  constructor (props){
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <Container>

        <Header>

          <Body>
            <Title>Account</Title>
          </Body>

        </Header>
        <Content>
          <Card>
            {/* <TouchableHighlight onPress={Actions.Account} > */}
            <CardItem>
              <View style={styles.flatview}>
                <View style={{marginLeft:30}}>
                  <Text style={styles.name}>Account number</Text>
                </View>

              </View>

            </CardItem>
              {/* </TouchableHighlight> */}
          </Card>
        </Content>
      </Container>



    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text:{
    fontSize:20,
    fontWeight:'600'
  },
  flatview: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    borderRadius: 2,
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18,
    marginBottom: 10
  },
  right: {
    marginLeft: 10
  }
})
