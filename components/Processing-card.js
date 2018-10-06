import React, {Component} from 'react'
import {Actions} from 'react-native-router-flux'
import Loading from './Loading'
export default class Processing extends Component {
  constructor (props) {
    super(props)
  }
  componentDidMount (){
    setTimeout(()=> {
      Actions.CardAdded({payee:this.props.payee})
    }, 6000)
  }
  render(){
    return <Loading message={"Paying "+this.props.payee} />
  }
}
