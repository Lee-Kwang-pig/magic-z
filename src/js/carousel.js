function carousel () {
  // 1. 左右按钮的显示与隐藏
  const arrowL = document.querySelector('.btn-left')
  const arrowR = document.querySelector('.btn-right')
  const focus = document.querySelector('.focus')
  focus.addEventListener('mouseenter', () => {
    arrowL.style.display = 'block'
    arrowR.style.display = 'block'
  })
  focus.addEventListener('mouseleave', () => {
    arrowL.style.display = 'none'
    arrowR.style.display = 'none'
  })
  // 2. 动态生成小圆圈
  const ul = focus.querySelector('ul')
  const ol = focus.querySelector('ol')
  for (let i = 0; i < ul.children.length; i++) {
    // 创建 li 并添加到 ol 里面
    const li = document.createElement('li')
    ol.appendChild(li)
    // 监听 ol 里面的 li，绑定 click 事件，添加 classname 设置样式
    li.addEventListener('click', () => {
      // 先清除所有小圆圈的classname
      for (let n = 0; n < ol.children.length; n++) {
        ol.children[n].className = ''
      }
      // 然后为当前小圆圈添加classname
      this.className = 'current'
    })
    ol.children[0].className = 'current'
  }
}

export { carousel }
