<template>
  <div class="home-main-content">
    <h3>基础用法</h3>
    <div class="source">
      <el-carousel height='300px' interval='2000' class="general-cars">
        <el-carousel-item v-for="item in 4" :key="item">
              <div class="carousel-text">{{ item }}</div>
        </el-carousel-item>
      </el-carousel>
      <div class="description">
        制作一个走马灯只需 el-carousel 和 el-carousel-item 两个标签。
        在 el-carousel 标签里添加 <strong>height='400px'</strong> 属性控制高度，宽度默认100%。
        默认情况下，在鼠标 hover 底部的指示器时就会触发切换。
        通过设置<strong>trigger</strong>属性为click，可以达到点击触发的效果。
        <p>interval 属性可以控制自动切换时间，interval='2000'，2秒。</p>
      </div>
    </div>
    <h3>指示器</h3>
    <div class="source">
      <el-carousel height='300px' indicator-position="outside" class="general-cars">
        <el-carousel-item v-for="item in 4" :key="item">
              <div class="carousel-text">{{ item }}</div>
        </el-carousel-item>
      </el-carousel>
      <div class="description">
        通过在 el-carousel 标签中添加 <strong>indicator-position</strong> 属性控制指示器的位置：
        <li>默认在内部。</li>
        <li>indicator-position="outside"，设置成在外部。</li>
        <li>indicator-position="none"，不显示指示器。</li>
      </div>
    </div>
    <h3>卡片化</h3>
    <div class="source">
      <el-carousel height='300px' type='card'>
        <el-carousel-item v-for="item in 6" :key="item">
              <div class="carousel-text">{{ item }}</div>
        </el-carousel-item>
      </el-carousel>
      <div class="description">
        通过在 el-carousel 标签中添加 <strong>type='card'</strong> 启用卡片模式。
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.general-cars {
  width: 500px;
  margin: 0 auto;
}
.carousel-text {
  text-align: center;
  line-height: 300px;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
}
.el-carousel__item:nth-child(2n) {
  background-color: rgba(190, 237, 199, .5);
}
.el-carousel__item:nth-child(2n+1) {
  background-color: rgba(236, 173, 158, .5);
}
</style>
