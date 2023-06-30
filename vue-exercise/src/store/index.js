import { createStore } from 'vuex'

const dataURL = 'https://mish-al.github.io/vueServer/dataServer.json';

export default createStore({
  state: {
    flagships: null
  },
  getters: {
  },
  mutations: {
    setFlagships(state, flagships) {
      state.flagships = flagships
    }
  },
  actions: {
    async fetchFlagships(context) {
      try {
        let res = await fetch(dataURL);
        let { flagships } = await res.json();

        context.commit('setFlagships', flagships);
      }
      catch (e) {
        alert(e.message);
      }
    }
  },
  modules: {
  }
})