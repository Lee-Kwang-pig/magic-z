<template>
  <div>
    <h3>我是home组件的内容</h3>
    <br>
    <div class="message">
      <ul>
        <li v-for="m in mgList" :key="m.id">
          <router-link :to="{
            name: 'mg',
            params: {id: m.id, title: m.title}}">
            {{ m.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <br>
    <div class="message-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chome',
  data: function () {
    return {
      mgList: [
        { id: '001', title: '消息001' },
        { id: '002', title: '消息002' },
        { id: '003', title: '消息003' },
        { id: '004', title: '消息004' },
        { id: '005', title: '消息005' }
      ]
    }
  },
  mounted () {
    console.log('home组件挂载完毕')
    console.log(this.$router)
    console.log(this.$route)
  },
  beforeDestroy () {
    console.log('home组件被销毁了')
  }
}
</script>

<style scoped>
.message li {
  float: left;
  font-size: 16px;
  padding: 10px 20px;
}
.message li:hover {
  background-color: #73c9e5;
}
.message-content {
  margin-top: 40px;
}
</style>
