<template>
  <div class="container white">
    <h1>SCOREBOARD</h1>
    <hr>
    <ScoreCard></ScoreCard>
  </div>
</template>

<script>
import ScoreCard from '../components/ScoreCard'
export default {
  name: 'ScoreBoard',
  components: {
    ScoreCard
  }
}
</script>

<style>
.white {
  background-color: white;
  border: solid;
  padding-bottom: 20px;
}
.white h1 {
  color: rgb(63, 63, 63);
}
</style>
