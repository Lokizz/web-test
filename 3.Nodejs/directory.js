const fs = require('fs')
const path = require('path')

// * 1. 检查文件夹是否存在
// 使用 fs.access() 检查文件夹是否存在以及 Node.js 是否具有访问权限
fs.access('test.txt', err => {
  if (err) {
    console.log(err) 
  }
})

// * 2. 创建新的文件夹
// fs.mkdir/mkdirSync() 创建新的文件夹
// const folderName = 'test'

// try {
//   if(!fs.existsSync(folderName)) {
//     fs.mkdirSync(folderName)
//   }
// } catch (err) {
//   console.error(err)
// }

// * 3. 读取目录的内容
// fs.readdir/readdirSync() 读取目录的内容
const folderPath = path.resolve('.')

// ? 读取文件夹的内容，柄返回它们的相对路径
// console.log(fs.readdirSync(folderPath))
// ? 获取完整的路径
const resolvedDir = fs.readdirSync(folderPath).map(filename => {
  return path.join(folderPath, filename)
})
// console.log(resolvedDir)
// ? 过滤结果仅返回文件
const isFile = fileName => {
  // lstatSync 返回 stats 然后调用 stats 的 isFile() 方法
  return fs.lstatSync(fileName).isFile()
}

const filteredFile = fs.readdirSync(folderPath).map(fileName => {
  return path.join(folderPath, fileName)
})
.filter(isFile)
console.log(filteredFile)


// * 4. 重命名文件夹
// fs.rename/renameSync()
// 第一个参数是当前路径，第二个参数是新的路径
// ? 异步方式
// fs.rename('test', 'anotherTest', err => {
//   if (err) {
//     console.error(err)
//     return
//   }
// })

// ? 同步方式
// try {
//   fs.renameSync('test', 'anotherTest')
// } catch(err) {
//   console.error(err)
// }


// * 5. 删除文件夹 
// fs.rmdir/rmdirSync 可删除文件夹
// 如果包含内容的文件夹推荐使用 fs-extra 模块的 remove() 方法
const fsExtra = require('fs-extra')

const folder = 'test'

fsExtra.remove(folder, err => {
  if (err) {
    console.error(err)
  }
})