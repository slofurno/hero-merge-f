import { combineReducers } from 'redux'

export const FETCH_HEROES_SUCCESS = 'FETCH_HEROES_SUCCESS'

export function fetchHeroes() {
  return (dispatch) => {
    fetch('/api/heroes')
      .then(res => res.json())
      .then(xs => dispatch(fetchHeroesSuccess(xs)))
  }
}

export function fetchHeroesSuccess(heroes) {
  return {
    type: FETCH_HEROES_SUCCESS,
    heroes
  }
}

export function mergedHeroCreated(hero, sources) {
  return (dispatch) => {
    fetch('/api/heroes/merge', {
      method: 'POST',
      body: JSON.stringify({
        hero,
        from: sources
      }),
    })
  }
}

function heroes(state = [], action) {
	switch(action.type) {
	case FETCH_HEROES_SUCCESS:
		return action.heroes
	default:
		return state
	}
}

export default heroes
