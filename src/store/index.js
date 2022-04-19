import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'

export default Vuex.createStore({
  state,
  mutations,
  actions
  // getters: {
  //   doubleHero (state) {
  //     return state.hero + ' ' + state.hero
  //   }
  // }
});
