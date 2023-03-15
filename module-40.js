const obj = { name: 'John' };
Object.keys(obj).forEach(prop => console.log(prop));
const name = 'John';
name.toUpperCase = () => 'JOHN';
console.log(name.toUpperCase());
const arr = [1, 2, 3];
arr.slice(-2, 0);
console.log(arr)