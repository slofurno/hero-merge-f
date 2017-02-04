import React, { Component, PropTypes } from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'

import Modal from 'modal'
import EditHero from 'edithero'

class CreateHeroContainer extends Component {
  render() {
    return (
      <Modal>
        <EditHero/>
      </Modal>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return state
}

export default connect(mapStateToProps, {})(CreateHeroContainer)
