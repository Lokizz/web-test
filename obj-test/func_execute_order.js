// ! 普通函数，回调函数以及 Promise 在调用栈中的运行顺序
setTimeout(() => {
  console.log('foo')
}, 0)

function test() {
  const pro = new Promise((resolve, reject) => {
    let run = true
    if (run) {
      resolve()
    } else {
      reject()
    }
  })
  pro.then(() => console.log('promise')).catch(err => console.log(err))
  setTimeout(() => {
    console.log('test')
  }, 0)
}

(function() {
  console.log('yeah')
})()

test()