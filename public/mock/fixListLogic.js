let heroList = reactive([])
async function getHeroListInfo () {
  let res = await axios.get('/api/hero_list.json')
  res = res.data
  if (res.ret && res.data) {
    const result = res.data
    heroList = result.heroes
  }

  let letters = []
  for (let i = 0; i < heroList.length; i++) {
    let letter = heroList[i].alias.charAt(0)
    if (letters.indexOf(letter) == -1) letters.push(letter)
  }
  letters.sort()
  let result = {}
  for (let j = 0; j < letters.length; j++) {
    let flag = letters[j]
    let tempArray = []
    for (let i = 0; i < heroList.length; i++) {
      let letter = heroList[i].alias.charAt(0)
      if (letter == flag) {
        tempArray.push(heroList[i])
      }
    }
    result[flag] = tempArray
  }
  console.log(result);
}