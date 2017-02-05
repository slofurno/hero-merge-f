import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'

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
    const { onCreate } = this.props

    return (
      <div>
        <label>hero name<Field name="hero_name" component="input" type="text"/></label>
        <label>real name<Field name="real_name" component="input" type="text"/></label>
        <label><span onClick={e => this.setState({gender: this.state.gender === 'Male' ? 'Female' : 'Male'})}> toggle gender: {this.state.gender}</span></label>
        <label>intelligence<Field name="intelligence" component="input" type="text"/></label>
        <label>strength<Field name="strength" component="input" type="text"/></label>
        <label>speed<Field name="speed" component="input" type="text"/></label>
        <label>durability<Field name="durability" component="input" type="text"/></label>
        <label>power<Field name="power" component="input" type="text"/></label>
        <label>combat<Field name="combat" component="input" type="text"/></label>
        <button type="button" onClick={onCreate}>Create</button>
      </div>
    )
  }
}

const form = 'createHero'
export default reduxForm({ form })(EditHero)
