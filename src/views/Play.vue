<template>
<div>
  <div class="navbar">
    <a @click="logout" href="">Exit</a>
      <button @click="startGame">Start Game</button>
    <Navbar></Navbar>
  </div>
  <div class="home">
    <h1>Play</h1>
    <BlockGame/>
  </div>
</div>
</template>

<script>

import BlockGame from '@/components/BlockGame.vue'
import Navbar from '../components/Navbar'

export default {
  name: 'Play',
  components: {
    Navbar,
    BlockGame
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
    },
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
    }
  }
}
</script>
