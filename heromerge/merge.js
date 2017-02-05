import React, { Component, PropTypes } from 'react'
import AttributeGraph from 'components/attributegraph'

import { toggle } from 'utils'

const powerStyle = {
  width: '100%',
  padding: 2,
  background: 'linen'
}

const removedStyle = Object.assign({}, powerStyle, {
  background: 'white'
})

const attributes = [
  'intelligence',
  'strength',
  'speed',
  'durability',
  'power',
  'combat'
]

const empty = '\u2610'
const check = '\u2611'

const combineAttributes = sources => {
  const combinedAttributes = {}
  attributes.forEach(attr => combinedAttributes[attr] = 0)

  sources.forEach(src =>
    attributes.forEach(attr =>
      combinedAttributes[attr] =
        Math.max(combinedAttributes[attr], src.attributes[attr])))

  return combinedAttributes
}

class Merge extends Component {
  constructor(props) {
    super(props)

    this.state = {
      removedPowers : []
    }
  }

  submit() {
    const powers = this.props.sources.reduce((a,c) => a.concat(c.powers), [])
        .reduce((a,c) => this.state.removedPowers.includes(c) ? a : a.concat(c), [])

    if (powers > 5 || powers < 1) {
      return
    }

    this.props.onSubmit({
      hero_name: this.refs.hero_name.value,
      real_name: this.refs.hero_name.value,
      attributes: combineAttributes(this.props.sources),
      powers,
      weaknesses: this.props.sources.reduce((a,c) => a.concat(c.weaknesses), []),
      gender: this.refs.gender.value
    }, this.props.sources.map(x => x.id))
  }

  render() {
    const { sources } = this.props
    const { removedPowers } = this.state

    const powers = sources.reduce((a,c) => a.concat(c.powers), [])
    const combinedAttributes = combineAttributes(sources)
    const heroNames = sources.map(x => x.hero_name).join(' and ')

    return (
      <div>
        <div>
          {heroNames}
        </div>
        <div style={{display: 'flex', flexDirection: 'row', flex: 1}}>
        <div>
          <label>hero name: <input ref="hero_name" type="text"/></label>
          <label>real name: <input ref="real_name" type="text"/></label>
          <label>gender: <input ref="gender" type="text"/></label>
        </div>
        <div style={{width: '100%'}}>
          <AttributeGraph attributes={combinedAttributes}/>
        </div>
        </div>

        <div>
        { powers.map((power,i) =>
            <div
              key={i}
              style={removedPowers.includes(power) ? removedStyle : powerStyle}
              onClick={() => this.setState({removedPowers: toggle(removedPowers, power)})}
            >
            {`${removedPowers.includes(power) ? empty : check} ${power}`}
            </div>)}
        </div>
      <input type="button" value="merge" onClick={() => this.submit()}/>
      </div>
    )
  }
}

export default Merge
