<template>
  <div class="col">
    <div
      v-if="coordinat.x === positionSpider.x && coordinat.y === positionSpider.y"
      class="justify-content-center d-flex mt-2">
      <button @click="changePosition" class="btn justify-content-center"><i id="spider" class="fas fa-spider"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Col',
  props: ['idxCol', 'idxRow'],
  data () {
    return {
      coordinat: {
        x: this.idxRow,
        y: this.idxCol
      },
      positionSpider: {
        x: '',
        y: ''
      }
    }
  },
  sockets: {
    position (payload) {
      console.log(payload)
      this.positionSpider = payload
    }
  },
  methods: {
    changePosition () {
      this.$socket.emit('changePosition')
    }
  }
  // created () {
  //   this.changePosition()
  // }
}
</script>

<style scoped>
  .col {
    border-radius: 20%;
    object-fit: cover;
  }
  #spider {
    min-width: 30px;
    min-height: 30px;
    font-size: 40px;
    color: black;
  }
</style>
