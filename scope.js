/*
1. Gloab scope
2. Block scope
3. Functional scope


if I declear someting using var in local scope it automatically execute and set globally.
*/

const num = 13;
if (num === 13) {
    console.log(num + ' From local scope');
}

const scope = () => {
    console.log(num + ' From functional scope');
}
scope();

console.log(num + " From global scope");

{
    const num = 5;
    console.log(num);
}