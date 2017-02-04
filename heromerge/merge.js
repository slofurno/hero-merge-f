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
      hero_name: this.refs.hero_name.value
    }, this.props.sources.map(x => x.id))
  }

  render() {
    const { sources } = this.props
    const { removedPowers } = this.state

    const powers = sources.reduce((a,c) => a.concat(c.powers), [])

    return (
      <div>
        <input ref="hero_name" type="text"/><br/>
        <input ref="real_name" type="text"/><br/>
        <input ref="gender" type="text"/><br/>
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
