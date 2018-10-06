import React, { Component } from 'react'
import _ from 'lodash';
import { Footer, FooterTab, Button, Badge, Text, Icon, StyleProvider } from 'native-base'
import { Actions } from 'react-native-router-flux'
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';

export default class Footer_Component extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const tabs = [];
    this.props.navigation.state.routes.forEach((scene) => {
      const { params } = scene.routes[0];
      tabs.push(
        <Button
          key={params.tab}
          vertical
          active={_.includes(Actions.currentScene, params.tab)}
          onPress={() => Actions[params.tab]()}
          badge={params.badge}
        >
          <Icon type="FontAwesome"  name={params.icon} />
        </Button>
      );
    })
    return (
      <StyleProvider style={getTheme(platform)}>
      <Footer>
        <FooterTab>
          {tabs}
        </FooterTab>
      </Footer>
    </StyleProvider>
    );
  }
}
