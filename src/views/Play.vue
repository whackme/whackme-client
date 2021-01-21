<template>
<div>
  <div class="navbar">
    <a @click="logout" href="">Exit</a>
  </div>
  <div class="home">
    <h1>Play</h1>
    <BlockGame/>
  </div>
</div>
</template>

<script>
import BlockGame from '@/components/BlockGame.vue'

export default {
  name: 'Play',
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
