let defaultHero = '上海'
try {
  if (localStorage.hero) {
    defaultHero = localStorage.hero
  }
} catch (e) { }

export default {
  hero: defaultHero
}
