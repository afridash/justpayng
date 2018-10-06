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
import Processing from './components/Processing-card'
import CardAdded from './components/Card-added'
import Fetching from './components/Fetching'
import Merchant from './components/Merchant'
import Amount from './components/Amount'
import Profile from './components/Profile'
import Bank from './components/Bank'
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
                <Scene key='index' component={Index} />
                {/* <Scene key='Camera' component={Camera} /> */}
                <Scene key='Signup' component={Signup} />
                <Scene key='Setpin' component={Setpin} />
                <Scene key="Processing" component={Processing} />
                <Scene key="CardAdded" component={CardAdded} />
                <Scene key="Fetch"  component={Fetching} />
                <Scene key="Merchant"   component={Merchant} />
                <Scene key="Amount" component={Amount} />
                <Scene key="Profile" component={Profile} />
                <Scene key="Bank"  component={Bank} />
                <Scene key="payMerchant"   component={payMerchant} />
                <Scene key="validateMerchant"   component={validateMerchant} />
                <Scene key="payContact"  component={payContact} />
                <Scene
                  key="footer"
                  hideNavBar={true}
                  tabs={true}
                  tabBarPosition={'bottom'}
                  tabBarComponent={Footer}
                  initial
                  >
                <Scene
                  key="History"
                  tab="History"
                  icon="history"
                  component={History}
                  hideNavBar={true}
                />
                <Scene
                  key="Contacts"
                  initial
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
