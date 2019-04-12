import React, { Component } from 'react'

import WsForm from './WsForm';


export default class WsContainer extends Component {

  submit = (values: any) => {
    console.log(values)
  }

  render() {
    return <WsForm onSubmit={this.submit} ></WsForm>
  }
}