<template>
<div>
  <div class="navbar">
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
    Navbar
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
    }
  },
  components: {
    BlockGame
  }
}
</script>
