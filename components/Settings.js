import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Card, CardItem,Left, Right, Body, Title, } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux'

export default class Settings extends Component {
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
            <Title>Settings</Title>
          </Body>

        </Header>
        <Content>
          <Card>

            <CardItem>
              <View style={styles.flatview}>
                <Icon name="credit-card" size={30}  />
                <View style={{marginLeft:28}}>
                  <TouchableHighlight onPress={Actions.Bank} underlayColor='white' activeOpacity={0.7}>
                  <Text style={styles.name}>Change account</Text>
                    </TouchableHighlight>
                </View>
              </View>


              {/* <Right> */}
                <Icon style={styles.left} name="chevron-right" size={20}  />
              {/* </Right> */}
            </CardItem>

          </Card>

          <Card>

            <CardItem>
              <View style={styles.flatview}>
                <Icon name="lock" size={40}  />
                <View style={{marginLeft:35}}>
                  <TouchableHighlight onPress={Actions.Bank} underlayColor='white' activeOpacity={0.7}>
                  <Text style={styles.name}>Change password</Text>
                  </TouchableHighlight>

                </View>
              </View>
              {/* <Right> */}
                <Icon style={styles.left} name="chevron-right" size={20}  />
              {/* </Right> */}

            </CardItem>
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
  left: {
    marginLeft: 150,
  }
})
