import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logindata: {
      username: ''
    },
    playerLoggedIn: []
  },
  mutations: {
    addUser (state, payload) {
      state.username = payload
    },
    MUTATE_insertUserToClient (state, payload) {
      console.log(payload)
      state.playerLoggedIn = payload

      if (payload.length === 1) {
        localStorage.setItem('player', JSON.stringify(payload[0]))
      } else {
        localStorage.setItem('player', JSON.stringify(payload[1]))
      }

      router.push('play')
    },
    MUTATE_updateSum (state) {
      // state.playerLoggedIn.sum = 2
      localStorage.setItem('totalLoginPlayer', JSON.stringify(state.playerLoggedIn))
    }
  },
  actions: {
  }
})
