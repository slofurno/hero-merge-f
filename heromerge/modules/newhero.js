import { combineReducers } from 'redux'
import { heroCreatedSuccess, HERO_CREATED_SUCCESS } from 'modules/heroes'

const POWERS_SET = 'POWERS_SET'
const WEAKNESSES_SET = 'WEAKNESSES_SET'

export const getPowers = state => state.newhero.powers
export const getWeaknesses = state => state.newhero.weaknesses

export function heroSubmitted({hero_name, real_name, gender, ...attributes}) {
  return (dispatch, getState) => {
    const createdHero = {
      hero_name,
      real_name,
      gender,
      attributes,
      powers: getPowers(getState()),
      weaknesses: getWeaknesses(getState())
    }

    fetch('/api/heroes', {
      method: 'POST',
      body: JSON.stringify(createdHero),
    })
    .then(hero => dispatch(heroCreatedSuccess(hero)))
    .catch(err => console.log(err))
  }
}


export function setPowers(powers) {
  return {
    type: POWERS_SET,
    powers
  }
}

export function setWeaknesses(weaknesses) {
  return {
    type: WEAKNESSES_SET,
    weaknesses
  }
}

function weaknesses(state = [], action) {
  switch(action.type) {
    case WEAKNESSES_SET:
      return action.weaknesses
    case HERO_CREATED_SUCCESS:
      return []
    default:
      return state
  }
}

function powers(state = [], action) {
  switch(action.type) {
    case POWERS_SET:
      return action.powers
    case HERO_CREATED_SUCCESS:
      return []
    default:
      return state
  }
}

const newhero = combineReducers({
  powers,
  weaknesses
})

export default newhero
