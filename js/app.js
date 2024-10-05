console.log(1);
console.log(2);
console.log(3);
console.log(4);

setTimeout(() => {
    console.log(5);
}, 4000);
console.log(6);
console.log(7);
console.log(8);
let num = 0;
const clockid = setInterval(() => {
    num++;
    if (num > 10) {
        clearInterval(clockid);
    }
    console.log(num);
}, 2000)

