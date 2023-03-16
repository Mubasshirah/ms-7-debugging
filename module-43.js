const name = 'Hero';const age = 34;
const person = {name, age}; console.log(person);
const adventurer = { name: 'Alice',cat: {name: 'Lucy'} };
const ratName = adventurer?.name;
console.log(ratName)
const obj = {a:1};
console.log(Object.keys(obj).length);