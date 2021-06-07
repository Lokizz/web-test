// TODO Web Test Snippets
// todo 显示绑定
// function foo() {
//   this.a = 13;
//   console.log(this);
//   console.log(this.a);
// }

// var a = 30;

// // 隐式块作用域（let 和 const）
// // let a = 1;

// function bar() {
//   foo.call(foo);
//   console.log(this);
//   console.log(this.a);
// }

// bar();

// foo();
// console.log(window.a);
// console.log(foo.a);

// todo 调用栈与 this 的默认绑定
// 调用栈：为了到达当前执行位置所调用的所有函数
// function baz() {
//   console.log('baz');
//   console.log(this);
//   // bar();
//   foo();
// }

// // baz();

// function foo() {
//   console.log('foo');
//   console.log(this);
// }

// baz.call(baz);

// baz();
// foo();


// todo 上下文对象的 this 绑定
// function foo() { 
//   console.log(this.a);
// }

// const obj = {
//   a: 2,
//   foo: foo
// }

// obj.foo();  // 2

// todo 只有引用链的最后一层起作用
// function foo() {
//   console.log(this.a);
// }

// const obj2 = {
//   a: 42,
//   foo: foo
// };

// const obj1 = {
//   a: 2,
//   obj2: obj2
// };

// obj1.obj2.foo();  // 42


// todo 硬绑定
// 1. bind 手写
// function foo(b) {
//   console.log(this.a, b);
//   return this.a + b;
// }

// const obj1 = {
//   a: 23
// }

// function bind(fn, obj) {
//   // 创建包裹函数用于接收参数并返回值
//   return function() {  // 用于接收参数
//     return fn.apply(obj, arguments);  // 用于返回值
//   };
// }

// const bar = bind(foo, obj1);
// console.log(bar(3));  // 26

// 2. 内置 bind
// function foo(b) {
//   console.log(this.a, b);
//   return this.a + b;
// }

// const obj = {
//   a: 2
// }

// // 原生用法
// // 返回一个硬编码的新函数，把指定的参数设置为 this 的上下文并调用原始函数
// const bar = foo.bind(obj);
// console.log(bar(3));  // 5

function Foo() {
  
}

const bar = new Foo();
bar.test = function() {
  console.log(this);
}
console.log(bar.__proto__, Foo.prototype);
bar.test();
console.log(bar);