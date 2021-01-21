<template>
  <div>
    <form action="">
      <label for="">Name</label><br>
      <input type="text" placeholder="input your name here"><br><br>
      <div>
        <button class="btn btn-primary" type="submit">Play</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Login',
  methods: {
    login () {
      localStorage.setItem('username', this.username)
      this.$router.push('/rooms')
      // socket.emit('login', this.username)
      this.username = ''
    }
  },
  computed: {
    ...mapState([
    ])
  }
}
</script>

<style>

</style>
