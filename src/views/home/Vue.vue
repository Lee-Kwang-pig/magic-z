<template>
  <div class="home-content-wrap m-width">
    <el-menu default-active="1-1-1">
      <!-- element ui model -->
      <el-submenu index="1">
        <template slot="title">
          <span>element ui</span>
        </template>
        <el-menu-item-group>
          <template slot="title">Navigation</template>
          <el-menu-item index='1-1-1' @click="linkTo('nav')">NavMenu 导航菜单</el-menu-item>
          <el-menu-item index='1-1-2'>Tabs 标签页</el-menu-item>
          <el-menu-item index='1-1-3' @click="linkTo('dropdown')">Dropdown 下拉菜单</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">Basic</template>
          <el-menu-item index='1-2-1'>Layout 布局</el-menu-item>
          <el-menu-item index='1-2-2'>Button 按钮</el-menu-item>
          <el-menu-item index='1-2-3'>Icon 图标</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">Form</template>
          <el-menu-item index='1-3-1'>Form 表单</el-menu-item>
          <el-menu-item index='1-3-2'>Silder 滑块</el-menu-item>
          <el-menu-item index='1-3-3'>TimePicker 时间选择器</el-menu-item>
          <el-menu-item index='1-3-4'>DatePicker 日期选择器</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">Other</template>
          <el-menu-item index='1-4-1' @click="linkTo('carousel')">Carousel 走马灯</el-menu-item>
          <el-menu-item index='1-4-2'>Collapse 折叠面板</el-menu-item>
          <el-menu-item index='1-4-3'>Backtop 回到顶部</el-menu-item>
          <el-menu-item index='1-4-4'>InfiniteScroll 无限滚动</el-menu-item>
          <el-menu-item index='1-4-5'>Drawer 抽屉</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- vue router model -->
      <el-submenu index='2'>
        <template slot="title">
          <span>Vue-router</span>
        </template>
      </el-submenu>
      <!-- vuex model -->
      <el-submenu index='3'>
        <template slot="title">
          <span>Vuex</span>
        </template>
      </el-submenu>
      <!-- axios model -->
      <el-submenu index='4'>
        <template slot="title">
          <span>Axios</span>
        </template>
      </el-submenu>
      <!-- other model -->
      <el-submenu index="9599">
        <template slot="title">
          <span>其它侧栏导航示例</span>
        </template>
        <el-menu-item index="55555">
          <i class="el-icon-menu"></i>
          <span slot="title">导航一</span>
        </el-menu-item>
        <el-menu-item index="64566" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="2-3654">
          <i class="el-icon-setting"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Vue',
  data () {
    return { linkto: '' }
  },
  methods: {
    linkTo (path) {
      this.$router.push('/home/vue/' + path)
    }
  }
}
</script>

<style>
.el-submenu__title span {
  margin-right: 30px;
  font-size: 16px;
  font-weight: 500;
}

/* 以下是子组件里的写笔记的通用样式，style 不能添加 scoped 参数 */
h3 {
  margin: 20px 0 20px 34px;
  font-size: 1.5em;
}
.source {
  padding: 24px;
  border: 1px solid #dcdfe6;
}
.meta {
  background-color: #fafafa;
  margin-top: 20px;
  border-top: 1px solid #eaeefb;
  /* overflow: hidden; */
  transition: height .2s;
}
.description {
  padding: 0 20px;
  box-sizing: border-box;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  font-size: 14px;
  line-height: 22px;
  color: #666;
  word-break: break-word;
  margin: 10px;
  background-color: #fff;
}
.description li {
  margin-left: 2em;
  list-style-type: disc;
  height: 2em;
}
</style>
