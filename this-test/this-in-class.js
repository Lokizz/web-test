// * this 在 class 中的绑定
class Test{
  constructor() {
    // ? constructor 中的 this 会自动指向实例对象
    console.log(this)
  }

  test() {
    console.log(this)
  }

  nestedArrow() {
    return () => {
      // 会继承外层函数调用的 this 绑定
      console.log(this)
    }
  }

  nestedThis() {
    return (function returnThis() {
      // ! Class 中会丢失 this 绑定
      // 且 Class 中默认使用严格模式，所以 this 绑定为 undefined
      console.log(this)  // undefined
    })
  }
}

const te1 = new Test()

te1.nestedThis()() 

te1.nestedArrow()()