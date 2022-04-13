export default {
  changeHero (state, hero) {
    state.hero = hero
    try {
      localStorage.hero = hero
    } catch (e) { }
  }
}
