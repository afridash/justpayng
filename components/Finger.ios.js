import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Alert} from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';

class FingerprintPopup extends Component {

  componentDidMount() {
    FingerprintScanner
      .authenticate({ description: 'Your device supports fingerprint scanning, scan to use fingerprint for transactions'})
      .then(() => {
        this.props.handlePopupDismissed();
        Alert.alert('Authenticated successfully');
      })
      .catch((error) => {
        this.props.handlePopupDismissed();
        Alert.alert(error.message);
      });
  }

  render() {
    return false;
  }
}

FingerprintPopup.propTypes = {
  handlePopupDismissed: PropTypes.func.isRequired,
};

export default FingerprintPopup;
