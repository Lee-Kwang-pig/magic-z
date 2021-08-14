<template>
  <div class="code m-width">
    <h1>组件测试</h1>
    <button @click="$router.push('/code/chome')">Home组件</button>
    <button @click="$router.push('/code/cabout')">About组件</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Code'
}
</script>

<style>
.code button {
  display: inline-block;
  height: 30px;
  margin: 20px 40px 20px 0;
}
</style>
