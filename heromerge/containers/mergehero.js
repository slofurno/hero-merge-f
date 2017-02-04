import React, { Component, PropTypes } from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'

import { mergedHeroCreated } from 'modules/heroes'
import Modal from 'modal'
import Merge from 'merge'

class MergeHeroContainer extends Component {
  render() {
    const { heroes, selectedHeroes, mergedHeroCreated } = this.props
    const sources = selectedHeroes.map(id => heroes.find(hero => hero.id === id))

    return (
      <Modal>
        <Merge sources={sources} onSubmit={mergedHeroCreated}/>
      </Modal>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return state
}

export default connect(mapStateToProps, {mergedHeroCreated})(MergeHeroContainer)
