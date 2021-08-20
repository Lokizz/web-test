const fetch = require('node-fetch')

// * 1. Progress module test
// const ProgressBar = require('progress')

// const bar = new ProgressBar(':bar', { total: 10 })
// const timer = setInterval(() => {
//   bar.tick()
//   if (bar.complete) {
//     clearInterval(timer)
//   }
// }, 100)

// * 2. Create Promise
// let done = true

// const isDoneYet = new Promise((resolve, reject) => {
//   if (done) {
//     const workDone = '这是创建的东西'
//     resolve(console.log(workDone))
//   } else {
//     const why = '仍然在处理其他事情'
//     reject(why)
//   }
// })

// * 3. Promise.all()
// -- 定义 promise 列表，并在所有 promise 都被解决后执行一些操作
// const f1 = fetch('https://www.google.com')
// const f2 = fetch('https://www.baidu.com')

// Promise.all([f1, f2])
//   // 支持 ES2015 的解构赋值语法
//   .then(([res1, res2]) => {
//     console.log('结果的数组：', res1.status, res2.status)
//   })
//   .catch(([err1, err2]) => {
//     console.log(err1, err2)
//   })

// * 4. Promise.race()
// －－ 当传给其的首个 promise 被解决时，开始运行，并且只运行一次附加的回调（传入第一个被解决的 promise 的结果）
// const first = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 500, '第一个')
// })
// const second = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 100, '第二个')
// })

// Promise.race([first, second])
//   .then(result => {
//     console.log(result)  // 第二个
//   })

// * 5. async/await
// ? Use promise to fetch and parse json file 
const getFirstUserDataByPromise = () => {
  return fetch('http://127.0.0.1:5500/node-test/users.json')
    .then(res => res.json())
    .then(users => users[0])
    .then(user => fetch(`http://127.0.0.1:5500/node-test/users/${user.name}.json`))
    .then(userRes => userRes.json())
    .catch(err => console.error(err))
}

getFirstUserDataByPromise().then(res => console.log(res))

// ? Use async/await for the same feature
const getFirstUserDataByAsync = async () => {
  const res = await fetch('http://127.0.0.1:5500/node-test/users.json')
  const users = await res.json()
  const user = users[0]
  const userRes = await fetch(`http://127.0.0.1:5500/node-test/users/${user.name}.json`)
  const userData = await userRes.json()
  return userData
}

getFirstUserDataByAsync().then(res => console.log(res))
