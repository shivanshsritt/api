// combine with spread operator


const  value1 =  { 1: "a", 2 :"b"}
const value2 =  { 3: "c" , 4 : "d"}
const print = Object.assign({},value1,value2)

console.log(print);

const  value0 =  { 1: "a", 2 :"b"}
const value =  { 3: "c" , 4 : "d"}
const prints= {value0, value};

console.log(prints);

const  num =  { 1: "a", 2 :"b"}
const num1 =  { 3: "c" , 4 : "d"}
const nums= {...value0, ...value};
console.log(nums);
