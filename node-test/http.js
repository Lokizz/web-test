// * 1. 搭建 HTTP 服务器
const createHttpServer = () => {
  const http = require('http')
  const { hostname } = require('os')

  const port = 3000

  // * 通过 createServer() 创建 HTTP 服务器
  const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n')
  })

  server.listen(port)
}

// createHttpServer()


// * 2. 发送 HTTP 请求
// ? 执行 GET 请求
const sendGetReq = () => {
  const https = require('https')
  const options = {
    hostname: "nodejs.cn",
    port: 443,
    path: '/todos',
    method: 'GET'
  }

  const req = https.request(options, res => {
    console.log(`Status code: ${res.statusCode}`)
    
    res.on('data', d => {
      process.stdout.write(d)
    })
  })

  req.on('error', err => {
    // process.stdout.write() 的作用是将内容打印到输出设备上
    process.stdout.write(err.message)
    console.log('\nerror occurred...')
  })

  req.end()
}

// sendGetReq()

// ? 发送 POST 请求
// PUT 和 DELETE 请求使用相同的 POST 请求格式，只需更改 options.method 的值即可
const sendPostRequest = () => {
  const https = require('https')
  const data = JSON.stringify({
    todo: 'do something'
  })

  const options = {
    hostname: 'nodejs.cn',
    port: 443,
    path: '/todos',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-length': data.length
    }
  }

  const req = https.request(options, res => {
    console.log(`Status code: ${res.statusCode}`)

    res.on('data', d => {
      process.stdout.write(d)
    })
  })

  req.on('err', err => {
    console.error(err.message)
  })

  req.write(data)
  req.end()
}

// sendPostRequest()


// * 3. 发送 HTTP POST 请求
// ? 使用 Axios 库
// const axios = require('axios')

// axios
//   .post('http://nodejs.cn/todos', {
//     todo: 'do something'
//   })
//   .then(res => {
//     console.log(`Status code: ${res.statusCode}`)
//   })
//   .catch(err => console.error(err))


// * 4. 获取 HTTP 请求的正文数据
// 请求正文中提取以 JSON 格式发送的数据
// ? Send request by Axios and Express
const axios = require('axios')

axios.post('http://nodejs.cn/todos', {
  todo: 'do something'
})

// ? Server side code
const express =require('express')
const app = express()

// ! 使用 Express 抽象了许多 Node.js 中相应的操作
// 用法类似 app.get() 或 app.post()
// app.get/post(path, callback) 中的 callback 只能是函数
// ! app.use(path, callback) 中的 callback 既可以是 router 对象又可以是函数 
// app.use(
//   express.urlencoded({
//     extended: true
//   })
// )

// app.use(express.json())

// app.post('/todos', (req, res) => {
//   console.log(req.body.todo)
// })

// ? Send request by Nodejs builtin modules
// const server = http.createServer((req, res) => {
//   // 监听流的 data 事件获取数据
//   req.on('data', chunk => {
//     console.log(`Available data chunk: ${chunk}`)
//   })
//   req.on('end', () => {
//     // 数据结束
//     console.log('The data transmission has completed.')
//   })
// })

// // 若要访问数据，则必须将其放入数组中
// const server = http.createServer((req, res) => {
//   let data = ''
//   req.on('data', chunk => {
//     data += chunk
//   })
//   req.on('end', () => {
//     JSON.parse(data).todo  // 'do something'
//   })
// })
