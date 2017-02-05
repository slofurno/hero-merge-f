import { combineReducers } from 'redux'
import heroes from './heroes'
import powers from './powers'
import selectedHeroes from './selectedheroes'

import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  heroes,
  powers,
  selectedHeroes,
  form: formReducer
})
