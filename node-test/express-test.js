const { response } = require('express')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('GET request to homepage')
  res.setHeader('Access-Control-Allow-Origin', '*')
})

app.get('/login', (req, res) => {
  res.sendFile('/Users/surloki/Documents/web-test/node-test/index.html')
})

app.listen(8000, () => {
  console.log('服务器启动成功')
})