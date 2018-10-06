import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Alert} from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';

class FingerprintPopup extends Component {

  componentDidMount() {
    FingerprintScanner
      .authenticate({ description: 'Your device supports fingerprint scanning, scan to use fingerprint for transactions'})
      .then(() => {
        this.props.handlePopupDismissed(true);
      })
      .catch((error) => {
        this.props.handlePopupDismissed(false);
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
