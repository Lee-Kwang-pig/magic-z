<template>
  <div class="home-main-content">
    <div class="content-text">
      <h5>匀速动画</h5>
      <p class="hint">
        <button @click="reset_0">重置</button>
        <button @click="speed_5">5X</button>
        <button @click="speed_10">10X</button>
      </p>
      <div class="box-2 animation">
        <div class="box-animation" @click="animation"><p class="hint">点击盒子运行</p></div>
      </div>
    </div>
    <div class="content-text">
      <h5>变速动画</h5>
      <p class="hint">
        <button @click="reset_1">重置</button>
        <button @click="faster">块</button>
        <button @click="slower">慢</button>
      </p>
      <div class="box-2 animation">
        <div class="box-animation variable" @click="animationVariable"><p class="hint">点击盒子运行</p></div>
      </div>
    </div>
    <div class="content-text">
      <h5>计算鼠标的坐标</h5>
      <div class="box-2 mouse-coordinate" @click="mouseCoordinate">
        <p class="hint">点击盒子内部区域显示鼠标坐标。</p>
        <p>通过 event.offsetX/Y 获取<strong>鼠标在盒子中的x、y坐标。</strong></p>
        <p>通过 event.pageX/Y 获取<strong>鼠标在网页中的x、y坐标。</strong></p>
        <p>鼠标在盒子中的坐标为：<span class="red-color">{{offsetx + ', ' + offsety}}</span></p>
        <p>鼠标在网页中的坐标为：<span class="red-color">{{pagex + ', ' + pagey}}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import { animate, animateVariable } from '@/js/common.js'

export default {
  name: 'MoveBox',
  data () {
    return {
      pagex: 0,
      pagey: 0,
      offsetx: 0,
      offsety: 0
    }
  },
  methods: {
    mouseCoordinate: function () {
      this.pagex = event.pageX
      this.pagey = event.pageY
      this.offsetx = event.offsetX
      this.offsety = event.offsetY
    },
    animation: function () {
      const obj = event.target
      animate(obj, 790, 2, function () {
        obj.style.backgroundColor = 'orange'
        obj.innerText = '移动完成'
      })
    },
    reset_0: function () {
      document.querySelector('.box-animation').style.left = 0
      document.querySelector('.box-animation').style.backgroundColor = 'darkseagreen'
      document.querySelector('.box-animation').innerText = '点击盒子运行'
    },
    speed_5: function () {
      const obj = document.querySelector('.box-animation')
      animate(obj, 790, 5, function () {
        obj.style.backgroundColor = 'orange'
        obj.innerText = '移动完成'
      })
    },
    speed_10: function () {
      const obj = document.querySelector('.box-animation')
      animate(obj, 790, 10, function () {
        obj.style.backgroundColor = 'orange'
        obj.innerText = '移动完成'
      })
    },
    animationVariable: () => {
      const obj = event.target
      animateVariable(obj, 790, 15, function () {
        obj.style.backgroundColor = 'orange'
        obj.innerText = '移动完成'
      })
    },
    reset_1: function () {
      const obj = document.querySelector('.variable')
      obj.style.left = 0
      obj.style.backgroundColor = 'darkseagreen'
      obj.innerText = '点击盒子运行'
    },
    faster: function () {
      const obj = document.querySelector('.variable')
      animateVariable(obj, 790, 5, function () {
        obj.style.backgroundColor = 'orange'
        obj.innerText = '移动完成'
      })
    },
    slower: function () {
      const obj = document.querySelector('.variable')
      animateVariable(obj, 790, 20, function () {
        obj.style.backgroundColor = 'orange'
        obj.innerText = '移动完成'
      })
    }
  }
}
</script>

<style>
/* ---------- */
.animation {
  position: relative;
  padding: 0;
}
.box-animation {
  position: absolute;
  width: 198px;
  height: 198px;
  background-color: darkseagreen;
}
.hint button {
  width: 40px;
  height: 25px;
  margin: 0 40px;
}
.mouse-coordinate{
  padding-left: 15px;
}
</style>
