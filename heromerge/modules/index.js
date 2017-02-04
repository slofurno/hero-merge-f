import { combineReducers } from 'redux'
import heroes from './heroes'
import powers from './powers'
import selectedHeroes from './selectedheroes'

export default combineReducers({
  heroes,
  powers,
  selectedHeroes
})
