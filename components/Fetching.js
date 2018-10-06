import React, {Component} from 'react'
import {Actions} from 'react-native-router-flux'
import Loading from './Loading'
export default class Fetching extends Component {
  constructor (props) {
    super(props)
  }
  componentDidMount (){
    setTimeout(()=> {
      Actions.Merchant()
    }, 6000)
  }
  render(){
    return <Loading message="Fetching Merchant Info" />
  }
}
