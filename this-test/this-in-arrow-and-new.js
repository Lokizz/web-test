// ! this 在普通函数与箭头函数中的绑定差异
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
  a: 1,
  test() {  // 标准函数的简写，而不是箭头函数的简写
    console.log('test', this)
  }
  // ! 不能直接在对象中使用箭头函数定义对象的方法
  // cbTest: () => {}  // 报错
}

// myObj.test()


myObj.test = myFunc

// myObj.test()

// newFunc()


// ! this 在语法糖 Class 中的绑定
class MyClass {
  constructor() {
    this.a = 123
  }

  test() {
    console.log('this in test: ', this)
    const that = this
    const foo = () => {
      console.log('this in foo: ', this)  // this === 实例
    }
    return foo
  }

  testInFunc() {
    function bar() {
      // ! 丢失绑定
      console.log("this in std Func: ", this)  // undefined
    }
    bar()
  }

  cbTest() {
    // ! this === 实例
    // setTimeout(() => {
    //   console.log('test in cb test:')
    //   this.test()
    // }, 0)
    setTimeout(() => {
      console.log("cbTest", this)  // this === 实例
    })
  }
}

// * new 关键字的默认行为
// ? 1. 如果没有返回自定义的对象，则会自动返回一个全新的对象
// ? 2. this 关键字的上下文会自动绑定到新对象上
// ? 3. 新对象（实例）的 __proto__ 原型链自动连接到 class.prototype 上
testClass = new MyClass()
// ? 函数被调用时的执行上下文为 testClass
// testClass.test()
// testClass.cbTest()
const foo = testClass.test()
// foo()
// testClass.cbTest()
// console.log(testClass.__proto__ === MyClass.prototype)  // true
// console.log(testClass.__proto__ === MyClass)  // false

setTimeout(() => {
  testClass.cbTest()
}, 0)

testClass.testInFunc()

function test() {
  console.log(this, 'test')
  function bar() {
    console.log(this, 'Bar')
    setTimeout(() => {
      console.log(this)
    }, 0)
  }
  bar()
}

// ! 全部 this 都会绑定到全局对象上
test()