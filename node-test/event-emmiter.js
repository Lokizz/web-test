const EventEmitter = require('events')

const eventEmitter = new EventEmitter()

// * emit 用于触发事件
// * on 用于添加回调函数

// * 创建 start 事件
eventEmitter.on('start', number => {
  console.log(`开始 ${number} ${process.argv}`)
})

// emit 可以将额外参数传给事件处理程序
eventEmitter.emit('start', 23)