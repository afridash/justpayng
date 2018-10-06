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
    title: 'Account',
    text: 'Add phone\nChoose a unique transfer pin, and username',
    image: require('../assets/1.png'),
    imageStyle: styles.image,
    backgroundColor: '#febe29',
    textStyle:styles.text,
    titleStyle:styles.title

  },
  {
    key: 'somethun-dos',
    title: 'Add Card',
    text: 'Add your debit/credit card',
    image: require('../assets/2.png'),
    imageStyle: styles.image,
    backgroundColor: '#20c3d0',
    textStyle:styles.text,
    titleStyle:styles.title
  },
  {
    key: 'somethun1',
    title: 'Congratulations!',
    text: 'Scan QR codes to pay merchants\n\nPay family and friends using username',
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
