function newFunc() {
  setTimeout(() => {
    console.log(this, 1211)
  }, 0)
  console.log(this)
}

const myFunc = () => {
  setTimeout(() => {
    console.log(this)
  }, 0)
}

const myObj = {
  a: 1
}

myObj.test = myFunc

// myObj.test()

// newFunc()



setTimeout(() => {
  console.log('foo')
}, 0)

function test() {
  
  setTimeout(() => {
    console.log('test')
    const pro = new Promise((resolve, reject) => {
      let run = true
      if (run) {
        resolve()
      } else {
        reject()
      }
    })
    pro.then(() => console.log('promise')).catch(err => console.log(err))
  }, 0)
}

(function() {
  console.log('yeah')
})()

test()