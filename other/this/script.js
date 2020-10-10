// function debounce(fun, delay) {
//     let timer;
//     return function (...args) {
//         const that = this;
//         if (timer) {
//             clearTimeout(timer);
//         }
//         timer = setTimeout(function () {
//             fun.apply(that, args);
//             timer = null;
//         }, delay);
//     };
// }
// function debounce(fun, delay) {
//     let timer;
//     return function (...args) {
//         // const that = this;
//         if (timer) {
//             clearTimeout(timer);
//         }
//         timer = setTimeout(function () {
//             fun.apply(this, args);// this window
//             timer = null;
//         }, delay);
//     };
// }
function debounce(fun, delay) {
    let timer;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fun.apply(this, args); // this dom
            timer = null;
        }, delay);
    };
}
// function debounce(fun, delay) {
//     let timer;
//     return function (...args) {
//         if (timer) {
//             clearTimeout(timer);
//         }
//         timer = setTimeout(() => {
//             fun(args); // 错误 this window
//             timer = null;
//         }, delay);
//     };
// }
// function debounce(fun, delay) {
//     let timer;
//     return (...args) => {
//         if (timer) {
//             clearTimeout(timer);
//         }
//         timer = setTimeout(() => {
//             fun.apply(this, args); // this window
//             timer = null;
//         }, delay);
//     };
// }

const btn = document.getElementById('btn');
function fn() {
    console.log(1, this);
}
// const fn = () => {
//     console.log(1, this);
// };
btn.onclick = debounce(fn, 500);
