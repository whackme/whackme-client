<template>
<div>
  <div class="navbar">
    <a @click="logout" href="">Exit</a>
  </div>
  <div class="home">
    <h1>Play</h1>
  </div>
</div>
</template>

<script>
export default {
  name: 'Play',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>
