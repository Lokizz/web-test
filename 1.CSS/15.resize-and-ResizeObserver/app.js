// * ResizeObserver 对象监测元素的尺寸缩放

const boxEl = document.querySelector('.box')

// ? 创建 ResizeObserver 对象，用以返回元素的变化
const observer = new ResizeObserver(
  // ? 添加变化时的回调函数
  entry => {
    let isSmaller = Number.parseInt(getComputedStyle(boxEl).width) < 192
    let isBigger = Number.parseInt(getComputedStyle(boxEl).width) > 300

    boxEl.style.backgroundColor = isSmaller ? 'red' : 'lightCoral'
    // boxEl.style.backgroundColor = isBigger ? 'lightGreen' : 'lightCoral'
  }
)

// ? observe 方法开始对指定元素进行监测
observer.observe(boxEl)
