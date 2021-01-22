<template>
  <div class="bg-dark" style="min-height: 100vh; display: flex; align-items: center;">
    <div class="container p-3 bg-light shadow rounded" style="max-height: 30rem; max-width: 30rem;">
      <form @submit.prevent="login">
        <div class="form-floating mb-3">
          <input v-model="logindata.username" type="text" class="form-control" id="productName" placeholder="Username">
        </div>
        <div class="row">
          <button type="reset" class="btn btn-danger col m-1">Cancel</button>
          <button type="submit" class="btn btn-primary col m-1">Submit</button>
        </div>
      </form>
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
      this.logindata.username = ''
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
