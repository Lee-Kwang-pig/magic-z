<template>
  <div class="home-main-content">
    <h3>Dropdown组件的用法</h3>
    <div class="source">
      <el-dropdown>
        <span class="el-dropdown-link">
          下拉菜单A<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>选项1</el-dropdown-item>
          <el-dropdown-item>选项2</el-dropdown-item>
          <el-dropdown-item>选项3</el-dropdown-item>
          <el-dropdown-item>选项4</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown>
        <el-button type="primary">
          下拉菜单B<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>选项1</el-dropdown-item>
          <el-dropdown-item>选项2</el-dropdown-item>
          <el-dropdown-item>选项3</el-dropdown-item>
          <el-dropdown-item>选项4</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown split-button @click="handleClick">
        <span>
          下拉菜单C
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>选项1</el-dropdown-item>
          <el-dropdown-item>选项2</el-dropdown-item>
          <el-dropdown-item>选项3</el-dropdown-item>
          <el-dropdown-item>选项4</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="meta">
        <div class="description">
          <p>外层用 el-dropdown 标签包裹；
            该标签内可添加 tigger='click' 属性改变触发下拉的行为，默认hover；
            还可以添加 split-button(直接添加，不需要赋值)，使触发元素呈现为按钮组，如下拉菜单C。
          </p>
          <p>el-dropdown 和 el-dropdown-menu 之间需要填写下拉单的名称，通常包裹在a、span、button标签中。</p>
          <p>el-dropdown-menu 标签控制下拉的开关，需要通过具名slot为dropdown 来设置下拉菜单</p>
          <p>el-dropdown-item 设置下拉菜单的元素选项。</p>
        </div>
        <pre>
          el-dropdown tigger='click' split-button
            span 下拉菜单 span
            el-dropdown-menu slot='dropdown'
              el-dropdown-item 选项1 el-dropdown-item
              el-dropdown-item 选项2 el-dropdown-item
              el-dropdown-item 选项3 el-dropdown-item
            el-dropdown-menu
          el-dropdown
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      alert('下拉菜单按钮功能函数')
    }
  }
}
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
}
.el-dropdown + .el-dropdown {
  margin-left: 45px;
}
.el-dropdown-link:hover {
  color: #73c9e5;
}

</style>
