import React, { Component, PropTypes } from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'

import { selectedHeroesChanged, toggleHero } from 'modules/selectedheroes'
import HeroList from 'herolist'

class App extends Component {
  render() {
    const { children, heroes, selectedHeroes, selectedHeroesChanged } = this.props
    return (
      <div style={{width: 600, maxWidth: '100%', margin: '0 auto'}}>
        <div>
          <Link to={'/'}> heroes </Link>
          <Link to={'/create'}> create </Link>
          <Link to={'/merge'}> merge </Link>
        </div>
        <HeroList
          heroes={heroes}
          selectedHeroes={selectedHeroes}
          heroClicked={hero =>
            selectedHeroesChanged(toggleHero(selectedHeroes, hero)) }/>

        { children }
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return state
}

export default connect(mapStateToProps, {selectedHeroesChanged})(App)
