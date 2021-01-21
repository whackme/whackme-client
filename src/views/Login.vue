<template>
  <div>
    <form @submit.prevent="login">
      <label for="">Name</label><br>
      <input v-model="logindata.username" type="text" placeholder="input your name here"><br><br>
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
      this.$store.commit('addUser', this.logindata.username)
      localStorage.setItem('username', this.logindata.username)
      this.$router.push('/play')
      console.log(this.logindata.username)
      this.logindata.username = ''
    }
  },
  computed: {
    ...mapState([
      'logindata'
    ])
  }
}
</script>

<style>

</style>
