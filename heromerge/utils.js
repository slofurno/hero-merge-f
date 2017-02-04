export function toggle(heroes, hero) {
  return heroes.includes(hero)
    ? heroes.filter(x => x !== hero)
    : heroes.concat(hero)
}
