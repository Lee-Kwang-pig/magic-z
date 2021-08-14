<template>
  <div class="hd-bk">
    <international-header>
        <!-- 左侧部分 导航链接 -->
        <template v-slot:left>
          <div class="nav-link">
            <ul class="nav-link-ul">
              <li class="nav-link-item mz-icon">
                <a href="#"><img src="~@/assets/img/logo/mz_4.png" alt=""></a>
              </li>
              <li class="nav-link-item">
                <router-link class="link" to="/home">主站</router-link>
              </li>
              <li class="nav-link-item">
                <router-link class="link" to="/code">编程</router-link>
              </li>
              <li class="nav-link-item">
                <a href="#" class="link">音乐</a>
              </li>
              <li class="nav-link-item">
                <a href="#" class="link">影视</a>
              </li>
              <li class="nav-link-item">
                <a href="#" class="link">小游戏</a>
              </li>
              <li class="nav-link-item dropdown">
                <el-dropdown>
                  <a href="#" class="link">百宝袋<i class="iconfont"></i></a>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>待开发A</el-dropdown-item>
                    <el-dropdown-item>待开发B</el-dropdown-item>
                    <el-dropdown-item>待开发C</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </li>
            </ul>
          </div>
        </template>
        <!-- 中间部分 搜索框 -->
        <template v-slot:center>
          <div class="nav-search-box">
            <div class="nav-search-form">
              <input type="text" placeholder='请输入搜索关键词'
                class="nav-search-keyword"
                @keypress="handleKeydownSearch">
              <div class="nav-search-btn">
                <button type="button" class="nav-search-submit" @click="handleClickSearch">
                  <i class="iconfont"></i>
                </button>
              </div>
            </div>
          </div>
        </template>
        <!-- 右侧部分 用户中心 -->
        <template v-slot:right>
          <div class="nav-user-center">
            <ul>
              <li class="user-login">
                <img src="~@/assets/img/user_photo.png" alt="">
              </li>
              <li class="vip-center">
               <el-dropdown>
                  <span>会员中心</span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>待开发A</el-dropdown-item>
                    <el-dropdown-item>待开发B</el-dropdown-item>
                    <el-dropdown-item>待开发C</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </li>
              <li class="user-collect">
               <el-dropdown>
                  <span>收藏</span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>待开发A</el-dropdown-item>
                    <el-dropdown-item>待开发B</el-dropdown-item>
                    <el-dropdown-item>待开发C</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </li>
              <li class="user-msg">
               <el-dropdown>
                  <span>消息</span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>待开发A</el-dropdown-item>
                    <el-dropdown-item>待开发B</el-dropdown-item>
                    <el-dropdown-item>待开发C</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </li>
              <li class="user-dynamic">
               <el-dropdown>
                  <span>动态</span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>待开发A</el-dropdown-item>
                    <el-dropdown-item>待开发B</el-dropdown-item>
                    <el-dropdown-item>待开发C</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </li>
              <li class="about">关于</li>
            </ul>
          </div>
        </template>
    </international-header>
  </div>

</template>

<script>
import InternationalHeader from '@/components/common/header/InternationalHeader.vue'

export default {
  name: 'MainHeader',
  components: {
    InternationalHeader
  },
  methods: {
    handleKeydownSearch () {
      const inputKeyword = document.querySelector('.nav-search-keyword')
      if (event.keyCode === 13) {
        alert('未查询到' + ' "' + inputKeyword.value + '"')
      }
    },
    handleClickSearch () {
      const inputKeyword = document.querySelector('.nav-search-keyword')
      alert('未查询到' + ' "' + inputKeyword.value + '"')
    }
  }
}
</script>

<style scoped>
/* ------左侧导航链接------ */
.nav-link,
.nav-search-box,
.nav-user-center {
 height: 36px;
 margin: 10px 0;
}
.nav-link ul,
.nav-search-box ul,
.nav-user-center ul {
  display: flex;
}
.nav-link ul li,
.nav-search-box ul li,
.nav-user-center ul li {
  height: 32px;
  line-height: 32px;
  padding: 0 12px;
}
.nav-link-item a {
  font-size: 16px;
  line-height: 32px;
  color: #fff;
}
.mz-icon {
  position: relative;
}
.mz-icon img{
  position: relative;
  left: 0;
  top: -2px;
  width: 40px;
  height: 40px;
}
.nav-link ul li .mz-icon {
  padding: 0;
}
.iconfont  {
  margin-left: 5px;
}

/* ------中间搜索框------ */
.nav-search-box {
  flex: 1;
  margin: 10px 50px;
  max-width: 630px;
}
.nav-search-form {
  display: flex;
  width: 100%;
  background-color: #fff;

}
.nav-search-keyword {
  flex: 1;
  overflow: hidden;
  height: 36px;
  border: none;
  background-color: transparent;
  color: #999;
  font-size: 14px;
  line-height: 36px;
  transition: all .2s;
  padding-left: 12px;
}
.nav-search-btn {
  width: 40px;
  height: 36px;
  background-color: #e7e7e7;
  cursor: pointer;
}
.nav-search-btn .iconfont {
  position: relative;
  left: 6px;
  top: 7px;
  font-size: 16px;
}

/* ------右侧用户中心------ */
.user-login  img{
  width: 32px;
  height: 32px;
}

/* 头部背景区域 */
.hd-bk {
  height: 180px;
  position: relative;
  background-color: rgba(115, 201, 229, .6);
  background-image: url('~@/assets/img/bili_bk.png');
  background-repeat: no-repeat;
  background-position: center top;
}
.hd-bk a:hover,
.el-dropdown-selfdefine:hover {
  color:#73c9e5;
}
/* 下拉菜单样式 */
.el-dropdown-selfdefine {
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
</style>
