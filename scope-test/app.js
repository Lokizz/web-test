// * 函数对作用域的赋值影响问题
console.log(window.a)   // undefined  
var a = 123
console.log(window.a)   // 123
{
  console.log(a, window.a)  // undefined 123
  a = 0
  console.log(a, window.a)  // 0 123
  // ! function a () {} 这句将a的值赋给了全局变量a，所以前面如果给a赋了啥值，后面的全局a就是啥值
  function a(){}
  console.log(a, window.a)  // 0 0
  a = 1
  console.log(a, window.a)  // 1 0
  function a() {}
  console.log(a, window.a)  // 1 1
}


console.log(window.a)  // 1 1