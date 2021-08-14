<template>
  <div mgdetail>
      <h4>消息编号：{{id}}</h4>
      <h4>消息标题：{{title}}</h4>
      <h4> {{time}} </h4>
      <!-- <h4> {{age}} </h4>
      <h4> {{sex}} </h4> -->
      <br><br>
      <button @click="printRoute">控制台输出route</button>
  </div>
</template>

<script>
export default {
  name: 'MgDetail',
  props: [ 'id', 'title', 'time' ],
  destroy () {
    console.log(this.$route)
    console.log('destroy')
  },
  methods: {
    printRoute () {
      console.log(this.$route)
    }
  }
}
</script>

<style>

</style>
