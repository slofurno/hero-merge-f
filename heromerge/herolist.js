import React, { Component, PropTypes } from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'

import Hero from './hero'

class HeroList extends Component {
  render() {
    const { heroes } = this.props
      console.log(heroes)

    return (
      <ul className="hero-list">
        { heroes.map((x,i) => <li key={i}><Hero hero={x}/> </li>) }
      </ul>
    )
  }
}

export default connect(x => x, {})(HeroList)
