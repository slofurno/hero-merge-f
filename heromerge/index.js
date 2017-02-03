import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'

import rootReducer from 'modules'
import { fetchHeroes } from 'modules/heroes'

const x = (state = "HELLO", action) => state
const store = createStore(rootReducer, applyMiddleware(thunk))
store.dispatch(fetchHeroes())

import App from './containers/app'
import HeroList from './herolist'

class Root extends Component {
  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={HeroList}/>
          </Route>
        </Router>
      </Provider>
    )
  }
}

render(
  <Root store={store} history={browserHistory}/>,
  document.getElementById('root')
)
