// new Promise((resolve) => {
//   resolve(1)
// })
// .then((res) => {
//   console.log(res)
//   // return res + 1
//   return 5
// })
// .then((res) => {
//   console.log(res)
// })

// import { compose } from 'redux';

// fetch('/api/person',{
//   method: 'GET',
// })
// .then((res) => {
//   return res.json()
// })
// .then((res) => {
//   console.log(res)
// })

// [0,3,4].reduce(function(accumulator, currentValue, currentIndex, array) {
//   console.log(accumulator) // 累加器
//   console.log(currentValue) // 当前项的值
//   console.log(currentIndex) // 当前项的索引
//   console.log(array) // 原始数组
//   return accumulator + currentValue; // 返回所有项的总和
// });

// class Fn {
//     constructor() {

//     }

//     point() {
//         // console.log(1)
//         return this;
//     }
// }
// const fn = new Fn();
// // console.log(Fn.point);
// // console.log(fn.point);
// console.log(fn.point());
// console.log(Fn);
// console.log(fn);

// class Functor {
//     constructor(...arg) {
//         this.val = arg;
//     }

//     map(f) {
//         //   return new Functor(f(this.val));
//         const arr = new Functor();
//         for (let i = 0; i < this.val.length; i++) {
//             arr.push(f(this.val[i], i));
//         }
//         return new Functor(...arr.val);
//     }

//     push(val) {
//         this.val[this.val.length] = val
//     }
// }
// Functor.of = function(...val) {
//     return new Functor(...val);
// }
// // const a = (new Functor('1','2')).map(item => item+1)
// const a = Functor.of('1','2').map(item => item+1)
// console.log(a)

// 柯里化
// const curry = (fn) => {
//     if (typeof fn !== 'function') {
//         throw Error('No function provided');
//     }
//     return function curriedFn(...args) {
//         if (args.length < fn.length) {
//             return function () {
//                 // return curriedFn.apply(null, args.concat([...arguments]));
//                 return curriedFn(...args, ...arguments);
//             };
//         }
//         return fn(...args);
//     };
// };
// const add = (a, b, c) => a + b + c;
// const newAdd = curry(add);
// const res = newAdd(1)(2);

// console.log(res(3));

// const add = (a,b,c) => {
//     console.log('add',a,b)
//     return a + b + c;
// }
// const newAdd = curry(add)
// const res = newAdd(1)(2)(3)
// // const res = newAdd(1,2,3)
// console.log(res)

// 偏应用
// const partial = function(fn,...partialArgs){
//     let args = partialArgs
//     return function partialFn(...fullArguments){
//         let arg = 0;
//         for(let i = 0; i < args.length && arg < fullArguments.length; i++){
//             if(args[i] === undefined){
//                 args[i] = fullArguments[arg++];
//             }
//         }
//         return fn.apply(null,args);
//     }
// }
// const fn = (a, b, c) => {
//     return a + b + c
// }

// /** 使用方法 */
// let prettyPrintJson = partial(fn,undefined,2,undefined);

// const res = prettyPrintJson(1,2); // 5
// console.log(res)

// // 注意这里传的参数是无效的
// const res2 = prettyPrintJson(2,2); // 5
// console.log(res2)

// let prettyPrintJson3 = partial(fn,undefined,3,undefined);
// const res3 = prettyPrintJson3(3,2); // 8
// console.log(res3)

// let prettyPrintJson4 = partial(fn,undefined);
// const res4 = prettyPrintJson4(4); // NaN
// console.log(res4)

// let prettyPrintJson5 = partial(fn,undefined,1,2,3);
// const res5 = prettyPrintJson5(1,2,3); // 4
// console.log(res5)

// 修饰器decorator
// const readonly = (target) => {
//     console.log('classTarget', target);
//     target = 1;
//     console.log('classTarget2', target);
// };

// const readonlyFn = (target, name, descriptor) => {
//     console.log('fnTarget', descriptor);
//     descriptor.writable = false;
//     descriptor.value = function (val) {
//         console.log(this.name + val);
//     };

//     return descriptor;
// };

// // @readonly
// class Point {
//     // constructor() {
//     //     this.name = 'w'
//     // }
//     name = 'w'

//     age = 18

//     @readonlyFn
//     point() {
//         console.log(this.name, this.age);
//     }
// }

// const point = new Point();
// point.point(2);


// 生成器generator
// let compute = function* (a, b) {
//     let sum = a + b;
//     yield console.log(sum);
//     let c = a - b;
//     yield console.log(c);
//     let d = a * b;
//     yield console.log(d);
//     let e = a / b;
//     console.log(e);
//   };
//   // 执行一下这个函数得到 Generator 实例
//   let generator = compute(4, 2);
//   // 要使得函数中封装的代码逻辑得到执行，还得需要调用一次next方法。
//   generator.next();
//   generator.next();

// const { a: aa = 10, b: bb = 5 } = { a: 3 };

// console.log(aa); // 3
// console.log(bb); // 5

// function fn(a, b) {
//     return a + b;
// }
// fn(1, 2);

// class FN {
//     constructor(...val) {
//         this.val = val;
//         this.a = val[0];
//         this.b = val[1];
//     }

//     map(f) {
//         return new FN(f(this.val));
//     }

//     filter() {

//     }
// }

// new FN(1, 2).map().filter();

// function f(fn) {

// }

// function g(a, b, c) {

// }
// f(g(a, b, c));

// f(g(a)(b)(c));

// const {
//     a,
//     b = a,
//     c: d = a
// } = {
//     a: 1,
//     b: null,
//     c: null
// };
// console.log(a, b, d);

// import qs from 'qs';

// const str = 'method=query_sql_dataset_data&projectId=85&appToken=7d22e38e-5717-11e7-907b-a6006ad3dba0&id=1&id=2&id=3';
// console.log(qs.parse(str));
// const str1 = 'id=1&id=2&id=3';
// console.log(qs.parse(str1).id);
// const obj = {
//     name: 'ws',
//     age: 18,
//     arr: [1, 2, 3]
// };
// console.log(qs.stringify(obj, { indices: false }));
// const arr = [1, 2, 3];
// console.log(qs.stringify({ id: arr }, { indices: false }));

// const obj = {
//     a: 1,
//     a: 2
// };
// console.log(obj);

// console.log('args', ...[]);


// class Life {
//     constructor(val) {
//         this.val = val;
//     }

//     fix(school, social) {
//         const boy = this.val;
//         const newBoy = boy + school + social;
//         return new Life(newBoy);
//     }
// }

// Life.of = function (val) {
//     return new Life(val);
// };

// const boy = '';

// // 链式
// const boyRes = Life.of(boy).fix(school, social).home(girl, money).country(friends, ex)
//     .numOne(x, y);


// // 组合式
// const fix = function (school, social, person) {
//     const newBoy = person + school + social;
//     return newBoy;
// };
// const toNumOne = pipe(curry(fix)(school)(social), curry(home)(girl)(money), curry(country)(friends)(ex), curry(numOne)(x)(y));
// const boyRes2 = toNumOne(boy);

// class Functor {
//     constructor(val) {
//         this.val = val;
//     }

//     map(f) {
//         return Functor.of(f(this.val));
//     }

//     get() {
//         return this.val;
//     }
// }
// Functor.of = function (val) {
//     return new Functor(val);
// };

// const add = (val) => (res) => val + res;

// console.log(Functor.of(2).map(add(1)));
// // console.log(Functor.of('Malkovich Malkovich').map((item) => item.match(/a/ig)));
// // console.log(Functor.of('Malkovich Malkovich').map((item) => item.match(/a/ig)).get());
// const compose = (...fns) => (value) => fns.reverse().reduce((acc, fn) => fn(acc), value);

// console.log(compose(() => Functor.of(2), map(add(1))));

// import * as R from 'ramda';

// const a = R.pathOr('-');
// console.log(a(['a', 'b'])({ a: { b: 2 } }));

// const getData = () => new Promise((resolve) => {
//     resolve(111);
// });

// getData().then((res) => {
//     console.log(res);
//     return res;
//     // return Promise.resolve(res);
// }).then((res) => {
//     console.log(res);
// });

// // eslint-disable-next-line max-classes-per-file
// class Point {
//     constructor(data) {
//         this.data = data;
//     }
// }
// // eslint-disable-next-line max-classes-per-file
// class User extends Point {
//     constructor(data) {
//         super(data);
//         this.code = 0;
//     }
// }
// console.log(JSON.stringify(new User({ name: 'ws' })));

// const that = this;
// const time = setTimeout(function () {
//     console.log(this, time, that);
// }, 1000);
// console.log(1);

// // 防抖
// function debounce(fun, delay) {
//     let timer;
//     return function (...args) {
//         if (timer) {
//             clearTimeout(timer);
//         }
//         timer = setTimeout(() => {
//             fun.apply(this, args); // this dom
//             timer = null;
//         }, delay);
//     };
// }

// // 节流
// function throttle(fun, delay) {
//     let time;
//     return function (...args) {
//         const that = this;
//         if (!time) {
//             time = setTimeout(() => {
//                 fun.apply(that, args);
//                 time = null;
//             }, delay);
//         }
//     };
// }

// const a = {
//     name: 'w'
// };
// const b = a;
// console.log(a === b);

// b.age = 18;
// console.log('a is', a);
// console.log('b is', b);

// const c = {
//     name: 'w',
//     point() {
//         console.log(1);
//     }
// };

// const d = Object.create(c);
// d.age = 18;
// // d.name = '123';
// d.point();
// console.log('c is', c);
// console.log('d is', d, d.name);

// const A = function () { };
// A.prototype.sayName = function () {
//     console.log('a');
// };

// // B的实例继承了A的属性
// const B = function () { };
// // B.prototype = Object.create(A.prototype);
// B.prototype = A.prototype;
// B.prototype.sayName = function () {
//     console.log('b');
// };
// const a = new A();
// const b = new B();
// a.sayName();
// b.sayName();

// const obj = {
//     key: 1
// };
// const descriptor = Object.create(null); // 没有继承的属性
// // 默认没有 enumerable，没有 configurable，没有 writable
// descriptor.value = 'static';
// Object.defineProperty(obj, 'key', descriptor);
// console.log(obj.key);

// const obj = {};
// Object.defineProperty(obj, 'key', {
//     get() {
//         console.log('get');
//         // return key;
//     },
//     set(newVal) {
//         console.log('set');
//         obj.key = newVal;
//     }
// });
// obj.key = 2;
// console.log('obj', obj.key);

// class People {
//     constructor(name, number) {
//         this.name = name;
//         this.number = number;
//     }

//     eat() {
//         console.log('eat');
//     }
// }

// class Student extends People {
//     constructor(name, number) {
//         super(name);
//         this.number = number;
//     }
//     sayHi() {
//         console.log(
//             `姓名：${this.name} 分数：${this.number}`
//         )
//     }
// }

// const xiaoluo = new Student('小罗', 100)
// // xiaoluo.__proto__.sayHi()
// // xiaoluo.sayHi()
// // Student.prototype.sayHi()
// // xiaoluo.eat()
// // console.log(Student.prototype)
// const people = new People('human', 10)
// console.log(people.__proto__ === People.prototype)
// console.log(People.prototype === Student.prototype.__proto__)
// console.log(people.__proto__ === Student.prototype.__proto__)
// console.log(people === Student.prototype)

// Object.prototype.lastname = 1;
// // 深拷贝
// function deepClone(obj) {
//     if (typeof obj !== 'object' || obj === null) {
//         return obj;
//     }

//     const res = obj instanceof Array ? [] : {};

//     // for (const key in obj) {
//     //     if (obj.hasOwnProperty(key)) {
//     //         res[key] = deepClone(obj[key]);
//     //     }
//     // }
//     Object.keys(obj).forEach((key) => {
//         res[key] = deepClone(obj[key]);
//     });

//     return res;
// }

// const a = {
//     name: 'w',
//     arr: [1, 2, 3]
// };
// const b = deepClone(a);
// b.name = 's';
// b.arr[0] = 5;
// console.log(a);
// console.log(b);
// console.log(Object.keys([4, 5, 6]));
// console.log([4, 5, 6]['1']);

// let i;
// for (i = 0; i <= 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 0);
//     // console.log(i);
// }

// for (let i = 0; i <= 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 0);
//     // console.log(i);
// }

// console.log('script start');

// setTimeout(() => {
//     console.log('setTimeout');
// }, 0);

// Promise.resolve().then(() => {
//     console.log('promise1');
// }).then(() => {
//     console.log('promise2');
// });

// console.log('script end');

// new Promise((resolve) => { resolve(1); }).then(() => {
//     console.log('promise1');
// }).then(() => {
//     console.log('promise2');
// });

// Promise.resolve().then(() => {
//     console.log(1);
//     setTimeout(() => Promise.resolve(), 3000);
// }).then(() => {
//     console.log(2);
// });

// const fn = () => new Promise((resolve) => {
//     console.log(1);
//     setTimeout(() => {
//         resolve();
//     }, 2000);
// });
// fn().then(() => {
//     console.log(2);
// });

// (function webpackUniversalModuleDefinition(root, factory) {
// 	if(typeof exports === 'object' && typeof module === 'object')
// 		module.exports = factory();
// 	else if(typeof define === 'function' && define.amd)
// 		define([], factory);
// 	else {
// 		var a = factory();
// 		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
// 	}
// })(window, function)

// function deepClone(obj) {
//     if (typeof obj !== 'object' || obj === null) {
//         return obj;
//     }

//     const res = obj instanceof Array ? [] : {};

//     Object.keys(obj).forEach((key) => {
//         res[key] = deepClone(obj[key]);
//     });

//     return res;
// }
// const a = {
//     a: 100,
//     b: {
//         a: 1,
//         b: 2
//     },
//     c: [1, 2, 3]
// };
// const b = deepClone(a);
// a.a = 200;
// a.b.a = 200;
// a.c = [10];
// console.log(a, b);

function isObj(obj) {
    // console.log(obj);
    return !(typeof obj !== 'object' || obj === null);
}

// // 深比较
function isEqual(obj1, obj2) {
    if (!isObj(obj1) || !isObj(obj2)) {
        // console.log(obj1, obj2);
        return obj1 === obj2;
    }
    if (obj1 === obj2) {
        return true;
    }
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    let res;
    Object.keys(obj1).some((key) => {
        res = isEqual(obj1[key], obj2[key]);
        return !res;
    });
    return !!res;
    // for (const key in obj1) {
    //     const res = isEqual(obj1[key], obj2[key]);
    //     if (!res) {
    //         return false;
    //     }
    // }
    // return true;
}
const a = {
    a: 100,
    b: {
        a: 1,
        b: 2
    },
    c: [1, 2, 3]
};
const b = {
    a: 100,
    b: {
        a: 1,
        b: 2
    },
    c: [1, 2, 3, 4]
};
console.log(isEqual(a, b));

// String.prototype.trim = function () {
//     // return this.replace(/^\s+/, '').replace(/\s+$/, '');
//     return this.replace(/(^\s+)|(\s+$)/g, '');
// };

// const a = '  123  ';
// console.log(a.trim());

// const array = [1, 2, [3, 4, [5, 6, [7, 8]]]];

// // 数组扁平化
// function flat(val) {
//     let arr = Array.prototype.concat.apply([], val);
//     Object.keys(arr).forEach((key) => {
//         if (arr[key] instanceof Array) {
//             arr = flat(arr);
//         }
//     });
//     return arr;
// }
// console.log(flat(array));
// debugger;

// class Functor {
//     constructor(val) {
//         this.val = val;
//     }

//     map(f) {
//         console.log('map', this.val);
//         return Functor.of(f(this.val));
//     }

//     // ap
//     ap(other_container) {
//         console.log('ap', this.val);
//         return other_container.map(this.val);
//     }
// }
// Functor.of = function (val) {
//     return new Functor(val);
// };
// const curry = (fn) => {
//     if (typeof fn !== 'function') {
//         throw Error('No function provided');
//     }
//     return function curriedFn(...args) {
//         if (args.length < fn.length) {
//             return function () {
//                 return curriedFn.apply(null, args.concat([...arguments]));
//             };
//         }
//         return fn(...args);
//     };
// };
// const add = curry((a, b) => a + b);
// Functor.of(add).ap(Functor.of(2)).ap(Functor.of(3)).map((val) => {
//     console.log(val);
// });
// // debugger;

// function fn(...arg) {
//     console.log(arguments);
//     console.log(arg);
// }
// fn(1, 2, 3);

// class A {
//     constructor(name, phone) {
//         this.name = `${name}www`;
//         this.phone = phone;
//         this.weight = 120;
//     }

//     say() {
//         console.log(`${this.name}${this.age}${this.sex}`);
//     }

//     getPhone() {
//         console.log(this.phone);
//     }
// }

// class B extends A {
//     constructor(name, age, sex) {
//         super(name);
//         // this.name = name;
//         this.age = age;
//         this.sex = sex;
//     }

//     point() {
//         console.log(`${this.name}${this.age}${this.sex}${this.weight}`);
//     }

//     // age() {
//     //     console.log(1);
//     // }
// }

// const b = new B('w', 18, 'man');
// b.point();
// b.say();
// console.log(b.__proto__); // B.protoperty
// console.log(b.__proto__.__proto__); // A.protoperty
// console.log(b.__proto__.__proto__.__proto__); // Object.protoperty
// console.log(b.__proto__.__proto__.__proto__.__proto__); // null
// debugger;

// es5实现class
// function A(name, phone) {
//     this.name = `${name}www`;
//     this.phone = phone;
// }
// A.prototype.say = function () {
//     console.log(`${this.name}${this.age}${this.sex}`);
// };
// A.prototype.getPhone = function () {
//     console.log(this.phone);
// };
// function B(name, age, sex) {
//     // this.name = name;
//     A.call(this, name);
//     this.age = age;
//     this.sex = sex;
// }
// // B.prototype = A.prototype;
// B.prototype = new A();
// B.prototype.constructor = B;
// B.prototype.point = function () {
//     console.log(`${this.name}${this.age}${this.sex}`);
// };
// const b = new B('w', 18, 'man');
// // b.point();
// // b.say();
// // b.getPhone();
// console.log(b.__proto__); // B.protoperty
// console.log(b.__proto__.__proto__); // A.protoperty
// console.log(b.__proto__.__proto__.__proto__); // Object.protoperty
// console.log(b.__proto__.__proto__.__proto__.__proto__); // null
// // console.log(b);
// // B.constructor = A;
// // console.log(A.constructor);
// debugger;

// function People() {}
// function Student() {}
// // Student.prototype = new People();
// console.log(Student.prototype);
// debugger;

// // 根据key获取链接参数
// function query(key) {
//     const search = window.location.search.substr(1);
//     const reg = new RegExp(`(^|&)${key}=([^&])(&|$)`, 'i');
//     const res = search.match(reg);

//     return res ? res[2] : null;
// }

// const oldArrayProperty = Array.prototype;
// const arrProto = Object.create(oldArrayProperty);
// ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((methodName) => {
//     arrProto[methodName] = function () {
//         console.log(this);
//         oldArrayProperty[methodName].call(this, ...arguments);
//         // oldArrayProperty[methodName]();
//     };
// });

// const arr = [1, 2, 3];
// arr.__proto__ = arrProto;
// arr.push(1);
// console.log('arr', arr);

// import { curry } from 'ramda';

// console.log(curry);

// const vnode = h(
//     'div#container.two.classes',
//     { on: { click: someFn } },
//     [
//         h('span', { style: { fontWeight: 'bold' } }, 'This is bold'),
//         ' and this is just normal text',
//         h('a', { props: { href: '/foo' } }, 'I\'ll take you places!')
//     ]
// );

const fn = () => {
    const a = 1;
    return () => {
        console.log(a);
    };
};
fn()();

const fn1 = () => {
    console.log(b);
};
const fn2 = () => {
    const b = 2;
    return fn1;
};
fn2()(); // 报错
