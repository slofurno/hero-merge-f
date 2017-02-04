import React, { Component, PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { browserHistory } from 'react-router'

const modalStyle = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  zIndex: 10,
  background: 'rgba(0,0,0,0.3)',
}

const modalContent = {
  background: 'white',
  color: 'black',
  margin: '110px auto 0',
  height: '100%',
  padding: 10,
  maxWidth: '720px',
}

const Modal = React.createClass({
  overlayClick({target}) {
    for(let node = target; node; node = node.parentNode) {
      if (node === this.refs.content) return
    }

    browserHistory.push('/')
  },

  render() {
    return (
      <div style={ modalStyle } onClick={ this.overlayClick }>
        <ReactCSSTransitionGroup transitionName="modal" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={0} transitionLeaveTimeout={0}>
        <div ref="content" key="modalContent" style={ modalContent }>
          { this.props.children }
        </div>
        </ReactCSSTransitionGroup>
      </div>
    )
  },
})

export default Modal
