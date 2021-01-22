<template>
  <div class="border d-flex" id="loginpage">
    <form @submit.prevent="login">
      <div class="form-group container">
        <input id="logininput" class="form-control" v-model="logindata.username" type="text" placeholder="input your name here">
        <button id="playbtn" class="btn" type="submit"> <i>Play >></i> </button>
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

<style scoped>
#loginpage {
  height: 100vh;
  justify-content: center;
  align-items: center;
}
#playbtn {
  text-decoration:none;
  color: inherit;
  float: right;
  color: rgb(59, 59, 59);
}

#playbtn i {
  font-size: 25px;
  font-weight: bold;
  color: rgb(61, 61, 61);
}

#logininput {
  width: 500px;
  border: solid;
}
</style>
