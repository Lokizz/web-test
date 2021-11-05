// * 霓虹灯效果 canvas 尝试

// ? 获取 canvas 元素
const canvas = document.getElementById('canvas')

// ? 让 canvas 的尺寸与视窗尺寸保持一致
// ? 利用 window.innerWidth/innerHeight 获取视窗尺寸
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// ? 初始化 GL context
const gl = canvas.getContext('webgl')