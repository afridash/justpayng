import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import {Button, Icon} from 'native-base'
import QRCodeScanner from 'react-native-qrcode-scanner';
import {Actions} from 'react-native-router-flux'
export default class ScanScreen extends Component {
  onSuccess(e) {
    Actions.Fetch()
  }

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        topContent={
          <View style={{marginTop:20}}>
            <Button onPress={() => Actions.Contacts()} transparent><Icon name='ios-close' style={[styles.icons, {fontSize:40}]} /></Button>
          </View>
        }
        bottomContent={
          <View style={styles.bottomContent}>
            <View>
              <Button onPress={() => Actions.History()} transparent><Icon type="FontAwesome" name='history' style={styles.icons} /></Button>
            </View>
            <View>
              <Button onPress={()=>Actions.Contacts()} transparent><Icon type="FontAwesome" name='dollar' style={styles.icons} /></Button>
            </View>
          </View>
        }
        showMarker
        bottomViewStyle={{backgroundColor:'black', flex:1, flexDirection:'row'}}
        topViewStyle={{backgroundColor:'black', flex:1, flexDirection:'row', alignItems:'flex-start', justifyContent:'flex-start'}}
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
  bottomContent:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  icons:{
    color:'white'
  }
});
