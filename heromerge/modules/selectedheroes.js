export const SELECTED_HEROES_CHANGED = 'SELECTED_HEROES_CHANGED'

export function selectedHeroesChanged(heroes) {
  return {
    type: SELECTED_HEROES_CHANGED,
    heroes
  }
}

export function toggleHero(heroes, hero) {
  return heroes.includes(hero)
    ? heroes.filter(x => x !== hero)
    : heroes.concat(hero)
}

function selectedHeroes(state = [], action) {
  switch(action.type) {
    case SELECTED_HEROES_CHANGED:
      return action.heroes
    default:
      return state
  }
}

export default selectedHeroes
