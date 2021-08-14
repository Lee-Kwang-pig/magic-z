<template>
  <div class="home-main-content">
    <div class="content-text">
      <h5>轮播图</h5>
      <div class="box-2">
        <div class="carousel-box focus">
          <el-carousel height='198px'>
            <el-carousel-item v-for="item in 4" :key="item">
              <div class="carousel-text">{{ item }}</div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel-box',
  methods: {
  }
}
</script>

<style scoped>
.box-2 {
  padding: 0;
}
.carousel-box {
  height: 198px;
  width: 400px;
  margin: 0 auto;
}
.carousel-text {
  text-align: center;
  line-height: 198px;
  margin: 0 auto;
  font-size: 20px;
  /* color: #fff; */
}
.el-carousel__item:nth-child(2n) {
  background-color: rgba(190, 237, 199, .5);
}
.el-carousel__item:nth-child(2n+1) {
  background-color: rgba(236, 173, 158, .5);
}

</style>
