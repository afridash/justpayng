import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Actions} from 'react-native-router-flux'
const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320,
  },
  text:{
    color:'white',
    fontSize:18
  },
  title:{
    color:'white',
    fontSize:32
  }
});

const slides = [
  {
    key: 'somethun',
    title: 'Verify BVN',
    text: '1. Verify BVN \n\n 2. Create a four digit transfer pin and finger print to be used for every transaction.',
    image: require('../assets/1.png'),
    imageStyle: styles.image,
    backgroundColor: '#febe29',
    textStyle:styles.text,
    titleStyle:styles.title

  },
  {
    key: 'somethun-dos',
    title: 'Add Account ',
    text: '1.Select bank \n\n 2. Add your Account Number',
    image: require('../assets/2.png'),
    imageStyle: styles.image,
    backgroundColor: '#20c3d0',
    textStyle:styles.text,
    titleStyle:styles.title
  },
  {
    key: 'somethun1',
    title: 'Congratulations!',
    text: '1.Scan QR codes to pay merchants\n\n 2.Pay family and friends using Phone Number\n\n 3. View transaction history',
    image: require('../assets/3.png'),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
    textStyle:styles.text,
    titleStyle:styles.title
  }
]

type Props = {};
export default class Index extends Component<Props> {
  _onDone = () => {
   // User finished the introduction. Show real app through
   // navigation or simply by controlling state
   Actions.Signup()
 }
  render() {
    return (
    <AppIntroSlider slides={slides} onDone={this._onDone} />
    );
  }
}
