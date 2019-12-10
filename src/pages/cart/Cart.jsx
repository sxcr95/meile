import React, { Component } from 'react'
import CartHeader from "./component/CartHeader"
import CartContent from "./component/CartContent"

export default class Cart extends Component {
  render() {
    return (
      <div style={{backgroundColor:"#f5f5f5"}}>
        <CartHeader/>
        <CartContent/>
      </div>
    )
  }
}
