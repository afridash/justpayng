import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {
  Scene,
  Router,
  Reducer,
  Overlay,
  Tabs,
  Stack,
  Lightbox
} from 'react-native-router-flux'
import Index from './components/Index'
//import Camera from './components/Camera'
import Footer from './components/Footer'
import Contact from './components/Contact'
import History from './components/History'
import Settings from './components/Settings'
import Signup from './components/Signup'
import Setpin from './components/Set-pin'
import AddCard from './components/Add-card'
import CardOtp from './components/Card-Otp'
import Processing from './components/Processing-card'
import CardAdded from './components/Card-added'
import Fetching from './components/Fetching'
import Merchant from './components/Merchant'
import Amount from './components/Amount'
import payContact from './components/payContact'
import payMerchant from './components/payMerchant'
import validateMerchant from './components/validateMerchant'
const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    return defaultReducer(state, action);
  };
};


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Router
        createReducer={reducerCreate}
        >
        <Overlay>
            <Lightbox>
              <Stack
                hideNavBar
                key="root"
              >
                <Scene key='index' initial component={Contact} />
                {/* <Scene key='Camera' component={Camera} /> */}
                <Scene key='Signup' component={Signup} />
                <Scene key='Setpin' component={Setpin} />
                <Scene key="Addcard" component={AddCard} />
                <Scene key="OTP" component={CardOtp} />
                <Scene key="Processing" component={Processing} />
                <Scene key="CardAdded" component={CardAdded} />
                <Scene key="Fetch" component={Fetching} />
                <Scene key="Merchant" component={Merchant} />
                <Scene key="Amount" component={Amount} />
                <Scene
                  key="footer"
                  hideNavBar={true}
                  tabs={true}
                  tabBarPosition={'bottom'}
                  tabBarComponent={Footer}
                  >
                <Scene
                  initial
                  key="History"
                  tab="History"
                  icon="history"
                  component={History}
                  hideNavBar={true}
                />
                <Scene
                  key="Contacts"
                  tab="Contacts"
                  icon="dollar"
                  component={Contact}
                  hideNavBar={true}
                />
                <Scene
                  tab="Settings"
                  key="Settings"
                  icon="user"
                  hideNavBar={true}
                  component={Settings}
                />
              </Scene>
              </Stack>
            </Lightbox>
        </Overlay>
      </Router>
    );
  }
}
