const fs = require('fs')

// * 1. 在 Node.js 中使用文件描述符
// ! 一旦获得文件描述符，就可以以任何方式执行所有需要它的操作
// 在与位于文件系统中的文件进行交互之前，需要获取去文件的描述符

// 文件描述符是使用 fs 模块提供的 open() 方法打开文件后返回的：
// fs.open('test.txt', 'r', (err, fd) => {  // r 为文件的编辑模式
//   // fd 是文件描述符
//   console.log(fd)
// })

// ? fs.openSync()
// ! 会直接返回文件描述符（而不是在回调中提供）
// try {
//   const fd = fs.openSync('test.txt', 'r')
//   console.log(fd)
// } catch (err) {
//   console.error(err)
// }


// * 2. Node.js 文件属性
// 使用 fs 模块的 stat() 方法检查文件的一组详细信息
// // ? 异步方式
// fs.stat('test.txt', (err, stats) => {
//   if (err) {
//     console.error(err)
//     return
//   }

//   // 使用 stats 访问文件属性
//   // console.log(stats)

//   // ! 日常编程中常用的方法
//   stats.isFile()
//   stats.isDirectory()
//   stats.isSymbolicLink()
//   stats.size
// })

// // ? 同步方式
// // ! 该方法会阻塞线程，直到文件属性准备就绪
// try {
//   const stats = fs.statsSync('test.txt')
//   console.log(stats)
// } catch (err) {
//   console.error(err)
// }


// * 3. Node.js 文件路径
// path 模块可以解决不同系统间的路径差异
// const path = require('path')

// const test = 'test.txt'
// ? 从路径中获取信息
// // 获取文件的父文件夹
// console.log(path.dirname(test))
// // 获取文件名部分（可以通过第二个参数来获取不带扩展名的文件名）
// console.log(path.basename(test, path.extname(test)))
// // 获取文件的扩展名
// console.log(path.extname(test))

// ? 使用路径
// // ! 解析和规范化都不会检查路径是否存在，只是根据获得的信息来计算路径
// // path.join() 连接路径的两个或多个片段
// const name = 'loki'
// console.log(path.join('/', 'users', name, 'notes.txt'))

// // path.resolve() 获得相对路径的绝对路径计算
// console.log(path.resolve('test.txt'))  // 简单地附加到当前工作目录
// // 指定第二个文件夹参数，则会使用第一个作为第二个的基础
// console.log(path.resolve('tmp', 'test.txt'))
// // 如果第一个参数以斜杠开头，则表示它是绝对路径
// console.log(path.resolve('/etc', 'test.txt'))

// // path.normalize() 出现相对说明符时，尝试计算时机的路径
// console.log(path.normalize('/users/surloki/..//test.txt'))


// * 4. 使用 Node.js 读取文件
// ! fs.readFile() 和 fs.readFileSync() 都会在返回数据之前将文件的全部内容读取到内存中
// ! 这意味着大文件会对内存的消耗和程序执行的速度产生重大的影响
// 这种情况下，更好的选择是使用流来读取文件的内容
// ? 异步方式
// fs.readFile('test.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log(data)
// })

// ? 同步方式
// try {
//   const data = fs.readFileSync('test.txt', 'utf8')
//   console.log(data)
// } catch (err) {
//   console.error(err)
// }


// * 5. 使用 Node.js 写入文件
// ! 所有这些方法都是在将全部内容写入文件之后才会将控制权返回给程序
// 这种情况下，更好的选择是使用流写入文件的内容
// ? 异步方式
// const content = 'some content waiting to be added'

// fs.writeFile('test.txt', content, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   // 文件写入成功
//   console.log('Content writing completed...')
// })

// ? 同步方式
// const contentSync = 'some content to be added sync...'

// try {
//   const data = fs.writeFileSync('test.txt', content)
// } catch (err) {
//   console.error(err)
// }

// // ! 默认情况下，此 API 会替换文件的内容（如果文件已经存在）
// // 可通过指定标志来修改默认的行为
// fs.writeFile('test.txt', content, {flag: 'a+'}, err => {
//   if (err) {
//     console.error(err)
//   }
// })

// ? 追加到文件
// 将内容追加到文件末尾的便捷方法是 fs.appendFile/appendFileSync()
const addContent = 'Content addition by fs.appendFile method'
fs.appendFile('test.txt', addContent, err => {
  if (err) {
    console.error(err)
    return
  }
  // Completed!
  console.log('Operation completed...')
})