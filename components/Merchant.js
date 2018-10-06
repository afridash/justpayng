import React, {Component} from 'react'
import {View, StyleSheet, StatusBar, Image} from 'react-native'
import {Text, Form, Item, Input, Label, Icon, Button, Card, CardItem,  Body} from 'native-base'
import {Actions} from 'react-native-router-flux'
export default class Loading extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.title}>Merchant Info</Text>
        </View>
        <View style={styles.body}>
          <Card style={{flex:1}}>
            <CardItem style={{flex:1}}>
              <View style={{flex:1}}>
                <View style={styles.imageContainer}>
                  <Image source={require('../assets/1.png')} style={styles.image} resizeMode={'contain'} />
                  <Text style={styles.merchant}>
                     Taiwo and Sons Ltd
                  </Text>
                </View>
                <View>
                  <Text style={styles.subtitle}>
                     Merchant Id: 4082390923
                  </Text>
                  <Text style={styles.subtitle}>
                     Address: 102 Otiotio Road
                  </Text>
                </View>
              </View>
            </CardItem>
          </Card>
          <View style={{flex:0.5}}></View>
        </View>
        <View style={styles.button}>
          <Button primary onPress={Actions.payMerchant}><Text> Continue </Text></Button>
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
    flex:1
  },
  body:{
    flex:3,
    margin:30,
  },
  title:{
    fontSize:30,
    color:'white',
    fontFamily:'Helvetica-Bold',
    padding:10
  },
  merchant:{
    fontSize:25,
    fontFamily:'Helvetica-Bold',
    padding:10
  },
  subtitle:{
    fontSize:16,
    fontFamily:'Helvetica-Light',
    padding:10
  },
  button:{
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    margin:10
  },
  image:{
    width:100,
    height:100,
    borderRadius:50,
    borderWidth:1,
    borderColor:'#EEEEEE'
  },
  imageContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
})
