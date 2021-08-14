<template>
  <div><h3>我是about组件的内容</h3></div>
</template>

<script>
export default {
  name: 'Cabout',
  mounted () {
    console.log('about组件挂载完毕')
  },
  beforeDestroy () {
    console.log('about组件被销毁了')
  }
}
</script>

<style>

</style>
