<template>
  <div class="container" id="scorecard">
    <div class="d-flex" style="width: 18rem;">
      <div class="card-body">
        <h3 class="card-title">username</h3>
        <h5 class="card-text">{{ point }}</h5>
      </div>
    </div>
      <hr>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ScoreCard',
  computed: {
    ...mapState({
      point: 'count'
    })
  }
}
</script>
<style>
.card-body {
  justify-content: center;
}
</style>
