import React, { Component, PropTypes } from 'react'

const defaultHero = {
  hero_name: '',
  real_name: '',
  gender: 'Male',
  attributes: {
    strength: 0,
    speed: 0,
  }
}

class EditHero extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {
    return (
      <div>
        <input ref="hero_name" type="text"/>
        <input ref="real_name" type="text"/>
        <span onClick={e => this.setState({gender: this.state.gender === 'Male' ? 'Female' : 'Male'})}> toggle gender: {this.state.gender}</span>
        <input ref="strength" type="text"/>
      </div>
    )
  }
}

export default EditHero
