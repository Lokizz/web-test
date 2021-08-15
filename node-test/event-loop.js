/// todo 1. 调用堆栈 -- 一个 LIFO 队列（后进先出）
// const bar = () => console.log('bar')
// const baz = () => console.log('baz')
// const foo = () => {
//   console.log('foo')
//   bar()
//   baz()
// }

// foo()  // 先调用 foo()，然后在 foo() 内部，会首先调用 bar()，然后调用 baz()

// todo 2. 消息队列 -- 回调函数会被放入消息队列中。
// 用户触发的事件也会在此排队，然后代码才有机会对其作出反应。
// * 事件循环会赋予调用堆栈优先级，它首先处理在调用堆栈中找到的所有东西——一旦其中没有任何东西，便开始处理消息队列中的东西。
// 不必等待注入 setTimeout、fetch、或其它函数完成它们自身的工作，因为它们是由浏览器提供的，并且位于他们自身的线程中。
// const bar = () => console.log('bar')
// const baz = () => console.log('baz')
// const test = () => console.log('test')

// const foo = () => {
//   setTimeout(bar, 0)
//   setTimeout(test, 0)
//   console.log('foo')
//   baz()
// }

// foo()
/* 会打印：
foo
baz
bar
test
*/

// todo 3. ES6 作业队列 -- 比消息队列的优先级高，比调用堆栈的优先级低
// ES6 引入了作业队列的概念，Promise (以及基于 promise 构建的 async/await) 使用了该队列。
// 这种方式会尽快地执行异步函数的结果，而不是放在调用堆栈的末尾。
// * 在当前函数结束之前 resolve 的 Promise 会在当前函数之后立即被执行。
// 有个游乐园中坐过山车的比喻：“消息队列”将你排在队列的后面（在所有其他人的后面），你不得不等待你的回合，而“工作队列”则是快速通道票，这样你就可以在完成上一次乘车后立即乘坐另一趟车。
const bar = () => console.log('bar')
const baz = () => console.log('baz')
const test = () => {
  console.log('test')
}



const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  setImmediate(() => {
    test()
  })
  // setTimeout(test, 500)
  // 作业队列会在当前函数执行完后尽快执行
  new Promise((resolve, reject) =>
  resolve('应该在 baz 之后，bar 之前')
  ).then(resolve => console.log(resolve))
  baz()
}

// JS 引擎异步地处理函数的方式——尽快执行而不是将其排入队列
process.nextTick(() => {
  test()
})

const out = () => {
  console.log('在 foo 函数之外的函数...')
  // let count = 0
  // while(count < 1000) {
  //   console.log(count)
  //   count++
  // }
}

foo()
out()
/*
foo
baz
test
应该在 baz + test 之后、bar 之前
bar
*/