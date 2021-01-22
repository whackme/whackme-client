<template>
  <div id="mainbg">
    <Navbar></Navbar>
    <Play></Play>
  </div>
</template>

<script>
import Play from '../views/Play'
import Navbar from '../components/Navbar'
export default {
  name: 'Main',
  components: {
    Navbar,
    Play
  }
}
</script>

<style>

</style>
