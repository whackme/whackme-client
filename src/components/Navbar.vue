<template>
  <div class="container">
      <div class="d-flex nav">
        <div id="navlogo">
          <h3>Whack me!</h3>
        </div>
        <div id="navbtn">
          <h3><a @click="logout" href="">Logout</a></h3>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$socket.emit('logout')
      this.$router.push('/')
    }
  }
}

</script>

<style scoped>
.nav {
  margin-top: 20px;
  justify-content: space-between;
}

#navlogo {
  color: rgb(65, 65, 65);
}
#navbtn {
  justify-content: end;
}
#navbtn h3 a {
  text-decoration: none;
  color: inherit;
}
</style>
