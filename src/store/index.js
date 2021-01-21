import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logindata: {
      username: ''
    }
  },
  mutations: {
    addUser (state, payload) {
      state.username = payload
    }
  },
  actions: {
  }
})
