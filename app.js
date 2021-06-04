// TODO Web Test Snippets
// todo .call() 的初步尝试
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

debugger;
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
function foo() { 
  console.log(this.a);
}

const obj = {
  a: 2,
  foo: foo
}

obj.foo();  // 2