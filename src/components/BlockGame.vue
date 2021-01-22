<template>
  <div class="container">
    <div class="row d-flex justify-content-center" id="box">
        <Row v-for="(item, idxRow) in row"
          :key="idxRow"
          :idxRow="idxRow"/>
    </div>
    <!-- <canvas
      id="blockGame"
      ref="game"
      width="640"
      height="480"
      >
      </canvas> -->
  </div>
</template>

<script>
import Row from './Row'

export default {
  name: 'BlockGame',
  data () {
    return {
      row: 8
    }
  },
  components: {
    Row
  }
}
</script>

<style scoped>
#box {
  height: 480px;
  width: 640px;
  border: 15px solid;
  border-color: rgb(226, 134, 134);
  border-style:groove;
  /* border: 1px solid black; */
  border-radius: 0%;
  background-color: white;
}
.row {
  border-radius: 15%;
}
</style>
