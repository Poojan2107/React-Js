import React, { Component } from 'react'

export default class GreetComponent extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <h1>My Age Is {this.props.age}.</h1>
      </div>
    )
  }
}
