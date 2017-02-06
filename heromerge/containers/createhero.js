import React, { Component, PropTypes } from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'

import { heroSubmitted, setPowers, setWeaknesses } from 'modules/newhero'

import Modal from 'modal'
import EditHeroForm from 'editheroform'


class CreateHeroContainer extends Component {
  render() {
    const { heroSubmitted, newhero, setPowers, setWeaknesses } = this.props
    return (
      <Modal>
        <EditHeroForm onSubmit={heroSubmitted} hero={newhero} setPowers={setPowers} setWeaknesses={setWeaknesses}/>
      </Modal>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return state
}

export default connect(mapStateToProps, {heroSubmitted, setPowers, setWeaknesses})(CreateHeroContainer)
