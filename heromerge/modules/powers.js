export const POWERS_CHANGED = 'POWERS_CHANGED'

function powers(state = [], action) {
  switch(action.type) {
    case POWERS_CHANGED:
      return action.powers
    default:
      return state
  }
}

export default powers
