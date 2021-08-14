<template>
  <div class="home">
    <!-- 主导航栏 -->
    <div class="home-main-nav m-width">
      <ul>
        <li><router-link to="/home/js">Javascript</router-link></li>
        <li>HTML5/CSS3</li>
        <li><router-link to="/home/vue">Vue</router-link></li>
        <li>Java</li>
        <li>Python</li>
        <li>MySQL</li>
        <li>Linux</li>
      </ul>
    </div>
    <!-- 内容区 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
@import '~@/assets/css/home.css';

.router-link-active {
  background-color: #73c9e5;
}

</style>
