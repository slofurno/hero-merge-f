import React, { Component, PropTypes } from 'react'
import AttributeGraph from 'components/attributegraph'

class SmallHero extends Component {
  render() {
    const { hero } = this.props
    return (
      <div>
        <div>
          {hero.hero_name}
        </div>
        <div>
          <AttributeGraph attributes={hero.attributes} size={0}/>
        </div>
      </div>
    )
  }
}

export default SmallHero
