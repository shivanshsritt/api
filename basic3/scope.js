{}    //scope 

// global scope 

let a = 60 ;

// block scope 

if (true) {
  let a = 30 ;
  const b = 40 ;
  var c = 50 ;
  console.log("block scope  : " ,a);
}


// console.log(c);      
console.log( "global scope : ",a);




// in inspect console the scope are differnet 