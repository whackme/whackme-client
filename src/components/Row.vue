<template>
  <div class="row">
    <Col v-for="(item, idxCol) in col"
      :key="idxCol"
      :idxRow="idxRow"
      :idxCol="idxCol"/>
  </div>
</template>

<script>
import Col from './Col'

export default {
  name: 'Row',
  props: ['idxRow'],
  data () {
    return {
      col: 8
    }
  },
  components: {
    Col
  }
}
</script>

<style>
  .row {
    border-radius: 15%;
    object-fit: cover;
  }
</style>
