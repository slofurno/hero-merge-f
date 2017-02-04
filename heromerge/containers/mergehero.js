import React, { Component, PropTypes } from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'

import Modal from 'modal'

class MergeHeroContainer extends Component {
  render() {
    return (
      <Modal>
      {"merge here"}
      </Modal>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return state
}

export default connect(mapStateToProps, {})(MergeHeroContainer)
