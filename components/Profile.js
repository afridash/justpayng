import React, {Component} from 'react'
import {View, StyleSheet, StatusBar, Image, Alert} from 'react-native'
import {Text, Form, Item, Input, Label, Icon, Button, Card, CardItem,  Body} from 'native-base'
import {Actions} from 'react-native-router-flux'
export default class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.title}>User Info</Text>
        </View>
        <View style={styles.body}>
          <Card style={{flex:1,}}>
            <CardItem>
              <View style={{flex:1,  }}>
                <View style={styles.imageContainer}>
                  <Image source={require('../assets/1.png')} style={styles.image} resizeMode={'contain'} />
                  <Text style={styles.merchant}>
                    Richard I. Igbiriki
                  </Text>
                </View>
                <View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.subtitle}>
                       Date of birth:
                    </Text>
                    <Text  style={{marginTop:10}}>
                       12th October, 1992
                    </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.subtitle}>
                       Residential address:
                    </Text>
                    <Text style={{marginTop:10, flex:1}}>
                       &nbsp;No 12, Azikoro Village Yenagoa, Lagos
                    </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.subtitle}>
                       Enrollment branch:
                    </Text>
                    <Text style={{marginTop:10}}>
                       Isaac Boro Express
                    </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.subtitle}>
                       Enrollment Bank:
                    </Text>
                    <Text style={{marginTop:10}}>
                        Guaranty Trust Bank
                    </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.subtitle}>
                        State of Origin:
                    </Text>
                    <Text style={{marginTop:10}}>
                         Bayelsa
                    </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.subtitle}>
                        Nationality:
                    </Text>
                    <Text style={{marginTop:10}}>
                        Nigeria
                    </Text>
                  </View>

                </View>
              </View>
            </CardItem>
          </Card>
          <View></View>
        </View>
        <View style={styles.button}>
          <Button primary onPress = {Actions.Setpin}><Text> Continue </Text></Button>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#0064B7'
  },
  header:{
    alignItems:'center',
    justifyContent:'center',


  },
  body:{
    flex:5,
    marginBottom:15,
    marginRight:15,
    marginLeft:15,

  },
  title:{
    marginTop:30,
    fontSize:30,
    color:'white',
    fontFamily:'Helvetica-Bold',
    padding:10
  },
  merchant:{
    marginBottom:15,
    fontSize:25,
    fontFamily:'Helvetica-Bold',
    padding:10
  },
  subtitle:{
    fontSize:16,
    fontWeight:'700',
    fontFamily:'Helvetica-Light',
    paddingTop:10,
    paddingBottom:10,
  },
  button:{
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    margin:10
  },
  image:{
    marginTop:20,
    width:100,
    height:100,
    borderRadius:50,
    borderWidth:1,
    borderColor:'#EEEEEE'
  },
  imageContainer:{

    alignItems:'center',
    justifyContent:'center'
  },
})
