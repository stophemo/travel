let defaultHero = '艾克'
try {
  if (localStorage.hero) {
    defaultHero = localStorage.hero
  }
} catch (e) { }

export default {
  hero: defaultHero
}
