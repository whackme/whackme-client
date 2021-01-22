<template>
  <div>
    <br><br><br>
    <div class="container">
    <div class="row">
    <div class="col-sm">
    </div>
    <div class="col-sm form-group shadow p-3 mb-5 bg-white rounded">
      <form @submit.prevent="login">
      <label for="">Name</label><br>
      <input class="form-control" v-model="logindata.username" type="text" placeholder="input your name here"><br><br>
      <div>
        <button class="btn btn-primary" type="submit">Play</button>
      </div>
    </form>
    </div>
    <div class="col-sm">
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Login',
  methods: {
    login () {
      // this.$store.commit('addUser', this.logindata.username)

      // localStorage.setItem('username', this.logindata.username)
      // this.$router.push('/play')
      // console.log(this.logindata.username)
      // this.logindata.username = ''

      this.$socket.emit('insertUser', this.logindata.username)
    }
  },
  computed: {
    ...mapState([
      'logindata',
      'playerLoggedIn'
    ])
  }
}
</script>

<style>

</style>
