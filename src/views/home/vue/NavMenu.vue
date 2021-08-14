<template>
  <div class="home-main-content">
    <h3>顶栏</h3>
    <div class="source">
      <el-menu
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index='1'>菜单A</el-menu-item>
        <el-menu-item index='2'>菜单B</el-menu-item>
        <el-menu-item index='3' disabled>菜单C</el-menu-item>
        <el-submenu index='4'>
          <template slot="title">菜单D</template>
          <el-menu-item index='4-1'>选项1</el-menu-item>
          <el-menu-item index='4-2'>选项2</el-menu-item>
          <el-menu-item index='4-3'>选项3</el-menu-item>
          <el-submenu index='4-4'>
            <template slot="title">选项4</template>
            <el-menu-item index='4-4-1'>选项1</el-menu-item>
            <el-menu-item index='4-4-2'>选项2</el-menu-item>
            <el-menu-item index='4-4-3'>选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
      <div class="meta">
        <div class="description">
          <p>
            导航菜单默认为垂直模式，通过
            <strong>mode="horizontal"</strong> 属性可以使导航菜单变更为水平模式。
          </p>
          <ul>Menu 还提供了以下可选属性：
            <li><strong>background-color</strong>，设置菜单的背景色</li>
            <li><strong>text-color</strong>，设置菜单的文字颜色</li>
            <li><strong>active-text-color</strong>，设置当前激活菜单的文字颜色</li>
          </ul>
        </div>
        <pre>
          // el-menu 导航菜单的起始标签，可以设置颜色等样式
          el-menu background-color text-color active-text-color mode="horizontal"
            el-menu-item index='1' 菜单A el-menu-item  // 普通菜单选项，每个菜单选项最好都添加一个唯一标识 index
            el-menu-item index='2' 菜单B el-menu-item
            el-submenu index='3'                     //  下拉菜单，也需要添加唯一标识
              template slot="title" 菜单D  template  // 为下拉菜单添加标题
              el-menu-item index='3-1' 选项1 el-menu-item
              el-menu-item index='3-2' 选项2 el-menu-item
              el-menu-item index='3-3' 选项3 el-menu-item
            el-submenu
          el-menu
        </pre>
      </div>
    </div>
    <br><hr><br>
    <h3>侧栏</h3>
    <div class="source">
      <el-menu
        default-active="2"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
      <div class="description">
        <p>
          通过el-menu-item-group组件可以实现菜单进行分组，
          分组名可以通过title属性直接设定，也可以通过具名 slot 来设定。
          </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
