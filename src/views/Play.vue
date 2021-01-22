<template>
<div>
  <div class="container d-flex justify-content-center">
    <button class="btn btn-success" id="startgame" @click="startGame">Start Game</button>
  </div>
  <div class="container">
      <div class="d-flex mainfeature">
        <div id="scoreboard">
          <ScoreBoard></ScoreBoard>
        </div>
        <div id="blockgame">
          <BlockGame/>
        </div>
      </div>
  </div>
</div>
</template>

<script>

import BlockGame from '@/components/BlockGame.vue'
import ScoreBoard from '../components/ScoreBoard'
import { mapState } from 'vuex'

export default {
  name: 'Play',
  components: {
    BlockGame,
    ScoreBoard
  },
  methods: {
    startGame () {
      this.$socket.emit('startGame')
    }
  },
  computed: {
    totalLoginPlayer () {
      if (localStorage.totalLoginPlayer) {
        return JSON.parse(localStorage.totalLoginPlayer)
      } else {
        return false
      }
    },
    ...mapState({
      isStarted: 'isStarted'
    })
  }
}
</script>
<style scoped>
.btn-success {
  margin: 50px 0;
}
.mainfeature {
  flex-flow: row;
  justify-content: space-around;
}
#startgame {
  justify-content: center;
}
</style>
