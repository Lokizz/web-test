// todo 1. JS 中对象的复制 -- 浅拷贝
// function anotherFunction() {

// }

// const anotherObj = {
//   c: true
// };

// const anotherArr = [];

// const myObj = {
//   a: 2,
//   b: anotherObj,  // 引用，非复制
//   c: anotherArr,  // 另一个引用
//   d: anotherFunction
// };

// // 修改之前
// console.log(myObj);

// // 因为是引用而非复制，myObj 里的值也被修改了
// // 而且造成了死循环
// anotherArr.push(anotherObj, myObj);

// // 修改之后
// console.log(anotherArr);
// console.log(myObj);


// todo 2. 属性描述符（ES5之后）
// const myObject = {
//   a:2
// };

// // Object.getOwnPropertyDescriptor() 获取对象中的某个属性描述符
// console.log(Object.getOwnPropertyDescriptor(myObject, 'a'));

// // Object.defineProperty() 添加新属性或者修改已有属性（configurable）
// Object.defineProperty(myObject, 'a', {
//   value: 3,  // 修改属性的值
//   writable: true,  // 是否可以修改属性的值
//   configurable: true,  // 是否能够修改属性描述符或删除该属性（不可逆操作）
//   enumerable: true  // 是否会出现在对象的属性枚举中
// });

// console.log(myObject);  // a: 3


// todo 3. 不变性
// 以下有方法创建的都是浅不变性，只会影响目标对象和它的直接属性

// 对象常量
// const myObj = {};

// Object.defineProperty(myObj, "FAVORITE NUMBER", {
//   value: 22,
//   writable: false,  // 不可修改属性值
//   configurable: false  // 不可重定义或删除属性
// });

// 禁止扩展
// 禁止添加新属性并保留已有属性
// const myObj = {
//   a: 2
// };

// Object.preventExtensions(myObj);

// myObj.b = 3;
// console.log(myObj.b);  // undefined

// 密封
// 等同于 Object.preventExtensions() + configurable: false
// 在调用禁止扩展的同时，把所有属性标记为 configurable: false
// const myObj = {
//   a: 2
// };

// 不能添加新属性，也不能重新配置或删除任何现有属性，但能修改现有属性的值
// Object.seal(myObj);
// myObj.a = 3;
// console.log(myObj.a); // 3
// myObj.b = 3;
// console.log(myObj.b);  // undefined

// 冻结
// 等同于 Object.seal() + writable: false


// todo 4. [[Get]]
// 找不到属性的话，对象默认的内置 [[Get]] 操作会返回 undefined， 而不会造成 ReferenceError 报错
// const myObj = {
//   a: 2
// };

// const newObj = Object.create(myObj);

// console.log(newObj.a);  // 沿着原型链查找


// todo 4. [[Put]]
// 控制属性的设置
// 最重要的因素为对象中是否已经存在这个属性


// todo 5. Getter 和 Setter（通常成对出现）
// 隐藏函数，只能部分改写默认操作，只能应用在单个属性上（而非整个对象上）
// 只设置 getter，
// ——访问属性时，会被自动调用，getter 函数返回的值当作属性的返回值
// const myObj = {
//   // 定义 getter 方法一
//   // 为 a 属性定义一个 getter
//   get a() {
//     return 2;
//   }
// };

// Object.defineProperty(
//   myObj,  // 目标对象
//   'b',  // 属性名
//   { // 描述符
//     // 定义 getter 方法二
//     // 为 b 设置一个 getter
//     get: function() { return this.a * 2 },
//     // 确保 b 会出现在对象的属性列表中
//     enumerable: true
//   }
// );

// // 同时设置 getter 和 setter
// const myObj = {
//   // 给 a 定义一个 getter
//   get a() {
//     return this._a_;
//   },

//   // 给 a 定义一个 setter
//   set a(val) {
//     this._a_ = val * 2;
//   }
// };

// Object.defineProperty(
//   myObj,  // 目标对象
//   'b',  // 属性名
//   {  // 属性描述符
//     get: function() {
//       return this._b_;
//     },

//     set: function(val) {
//       this._b_ = val + 3;
//     }
//   }
// );

// myObj.a = 2; // 2
// console.log(myObj.a);  // 4
// myObj.b = 4;  // 4
// console.log(myObj.b);  // 4 + 3 


// todo 6. 存在性 (in 和 hasOwnProperty 的区别)
// in 操作符会检查该属性名是否在对象及其原型链中
const myObj = {
  a: 2
};

const newObj = Object.create(myObj);
newObj.b = 4;

console.log("a" in newObj);  // true
console.log("b" in newObj);  // true
console.log(newObj.hasOwnProperty('a'));  // false
console.log(newObj.hasOwnProperty('b'));  // true

const arr = [1, 2];
arr.a = 333;
// for...in... 不仅遍历所有数值索引，还会包含所有可枚举属性，最好只在对象上使用
for(let i in arr) {
  console.log(i);
}
for(let i of arr) {
  console.log(i);
}
arr.forEach((item) => {
  console.log(item);
})

function foo() {};
console.log(typeof arr);