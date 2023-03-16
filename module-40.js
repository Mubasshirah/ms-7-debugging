const obj = { name: 'John' };
Object.keys(obj).forEach(prop => console.log(prop));
const name = 'John';
name.toUpperCase = () => 'JOHN';
console.log(name.toUpperCase());
const arr = [1, 2, 3];
arr.slice(-2, 0);
console.log(arr)

const marks= 60;
const resubmit = -5; 
console.log(!(marks > 0 || resubmit > 0));

const person = {
    name: "hero", 
    id: 101, 
    address: "BD",
    postalCode: 40321
  };
  console.log(Object.keys(person).length)
  
  const unique = array => console.log(array.indexOf(21));
  const array = [2,3,4,5,2];
  unique(array)

  const b=6
// b=6
// console.log(b);

const colors = {mango: 'green', grapes: 'black', organe: 'yellow'};
console.log(colors.grapes)

  