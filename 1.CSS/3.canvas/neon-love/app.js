// * 霓虹灯效果 canvas 尝试

// ? 获取 canvas 元素
const canvas = document.getElementById('canvas')

// ? 让 canvas 的尺寸与视窗尺寸保持一致
// ? 利用 window.innerWidth/innerHeight 获取视窗尺寸
let sideLength = window.innerWidth < window.innerHeight ? window.innerWidth / 2 : window.innerHeight / 2

canvas.width = sideLength
canvas.height = sideLength


// ? 初始化 GL context 对象
const gl = canvas.getContext('webgl')

// ? 使用 ctx 对象的属性和方法绘制内容
if(!gl) {
  console.log("Unable to initialize WebGL")
}


