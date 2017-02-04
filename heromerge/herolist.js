import React, { Component, PropTypes } from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'

import Hero from './hero'

class HeroList extends Component {
  render() {
    const { heroes, selectedHeroes, heroClicked } = this.props

    return (
      <div>
        { heroes.map((hero,i) =>
            <Hero
              hero={hero}
              onClick={() => heroClicked(hero.id)}
              selected={selectedHeroes.includes(hero.id)}
              key={i}/>) }
      </div>
    )
  }
}

export default HeroList
//export default connect(x => x, {})(HeroList)
