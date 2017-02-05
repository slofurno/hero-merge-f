import React, { Component, PropTypes } from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'

import { heroCreated } from 'modules/heroes'

import Modal from 'modal'
import EditHero from 'edithero'

class CreateHeroContainer extends Component {
  render() {
    const { heroCreated } = this.props
    return (
      <Modal>
        <EditHero onCreate={heroCreated}/>
      </Modal>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return state
}

export default connect(mapStateToProps, {heroCreated})(CreateHeroContainer)
