<template>
  <div class="home-content-wrap m-width">
    <!-- 左侧导航栏 -->
    <div class="home-side-nav">
      <ul><span>网页特效</span>
        <li><router-link to="/home/js/animate">动画</router-link></li>
        <li><router-link to="/home/js/carousel">轮播图</router-link></li>
      </ul>
    </div>
    <!-- 文本区 -->
    <!-- <keep-alive> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
export default {
  name: 'JavaScript',
  methods: {
    linktoPath (destination) {
      this.$router.push('/home/js/' + destination)
    }
  }
}
</script>

<style scoped>

.router-link-exact-active {
  background-color: #aaa;
  color: #fff;
}

</style>
