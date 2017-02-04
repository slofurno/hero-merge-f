import React, { Component, PropTypes } from 'react'

import { toggle } from 'utils'

const powerStyle = {
  width: '100%',
  padding: 10,
  background: 'linen'
}

const removedStyle = Object.assign({}, powerStyle, {
  background: 'slategray'
})

class Merge extends Component {
  constructor(props) {
    super(props)

    this.state = {
      removedPowers : []
    }
  }

  submit() {
    this.props.onSubmit({
      hero_name: this.refs.hero_name.value,
      real_name: this.refs.hero_name.value,
      attributes: {
        strength: this.refs.strength.value|0,
        speed: this.refs.speed.value|0,
        power: this.refs.power.value|0,
        intelligence: this.refs.intelligence.value|0,
        durability: this.refs.durability.value|0,
        combat: this.refs.combat.value|0
      },
      powers: this.props.sources.reduce((a,c) => a.concat(c.powers), [])
        .reduce((a,c) => this.state.removedPowers.includes(c) ? a : a.concat(c), []),
      weaknesses: this.props.sources.reduce((a,c) => a.concat(c.weaknesses), []),
      gender: this.refs.gender.value
    }, this.props.sources.map(x => x.id))
  }

  render() {
    const { sources } = this.props
    const { removedPowers } = this.state

    const powers = sources.reduce((a,c) => a.concat(c.powers), [])

    return (
      <div>
        <label>hero name: <input ref="hero_name" type="text"/></label><br/>
        <label>real name: <input ref="real_name" type="text"/></label><br/>
        <label>gender: <input ref="gender" type="text"/></label><br/>
        <label>strength<input ref="strength" type="number" min="0" max="100"/></label><br/>
        <label>speed<input ref="speed" type="number" min="0" max="100"/></label><br/>
        <label>power<input ref="power" type="number" min="0" max="100"/></label><br/>
        <label>intelligence<input ref="intelligence" type="number" min="0" max="100"/></label><br/>
        <label>durability<input ref="durability" type="number" min="0" max="100"/></label><br/>
        <label>combat<input ref="combat" type="number" min="0" max="100"/></label><br/>

        <div>
        { powers.map((power,i) =>
            <div
              key={i}
              style={removedPowers.includes(power) ? removedStyle : powerStyle}
              onClick={() => this.setState({removedPowers: toggle(removedPowers, power)})}
            >
            {power}
            </div>)}
        </div>
      <input type="button" value="merge" onClick={() => this.submit()}/>
      </div>
    )
  }
}

export default Merge
