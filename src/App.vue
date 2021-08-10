<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <main-header></main-header>
    <home></home>
  </div>
</template>

<script>
import MainHeader from './components/content/MainHeader.vue'
import Home from './views/home/Home.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    Home

  }
}
</script>

<style>
@import "~@/assets/css/basecss.css";
</style>
