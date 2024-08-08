//rest operator   that convert array 

function cartiteamadd (...num1){
  return num1
}
console.log(cartiteamadd (242,500,523));
 

function cartiteam (val ,val2 ,...num1){
  return   num1
}
console.log(cartiteamadd (343,4534,242,500,523));



//object passes 

 const item = {
   mango : "ice cream ", 
   price :  45 
 }
 function list (twoitem ){
return (`this is ${twoitem.mango}, ${twoitem.price}`)
 }
 console.log(list(item));
 

// pass array 

 const number = [ 12,43,43,23]
 function  passarray (newvalue){
return newvalue[1]
 }
 console.log(passarray (number));
 
