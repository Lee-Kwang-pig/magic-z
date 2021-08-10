/* 匀速动画函数 */
function animate (obj, target, step = 1, callback) {
/* obj: 必须是开启了定位的对象
  target: 移动到目标位置，Number类型
  step: 步距，控制移动的速度，Number类型
  callback: 回调函数，当动画完成移动，到达指定位置时执行该函数 */
  // 把定时器 timer 绑定给对象“obj.timer”
  // 不同的对象开启不同的定时器，且减少了创建定时器函数占用的内存空间
  // 清除之前的定时器，避免同一个对象开启多个定时器，动画速度越来越快
  clearInterval(obj.timer)
  obj.timer = setInterval(() => {
    if (obj.offsetLeft >= target) {
      clearInterval(obj.timer)
      // 判断是否传入回调函数，有的话就执行
      if (callback) { callback() }
    }
    obj.style.left = obj.offsetLeft + step + 'px'
  }, 15)
}

/* 匀速动画函数 */
function animateVariable (obj, target, grade = 10, callback) {
  clearInterval(obj.timer)
  obj.timer = setInterval(() => {
    let step = (target - obj.offsetLeft) / grade
    step = step > 0 ? Math.ceil(step) : Math.floor(step)
    if (obj.offsetLeft >= target) {
      clearInterval(obj.timer)
      if (callback) { callback() }
    }
    obj.style.left = obj.offsetLeft + step + 'px'
  }, 15)
}

export { animate, animateVariable }
