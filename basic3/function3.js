// function add (num1 ,num2) {

// console.log(num1+num2);

// };

//    let final = add(3,5)

//    console.log(final);

// second example

// function add (num1,num2){
//   // let result = num1+num2
//   return num1+num2
// };


// let result=add(3,4);
// console.log("result:",result);



// function isusername (isloggedin){
// return `${isloggedin} just logged in `
// }

// console.log(isusername  ,("hello") );
function loginUserMessage(username = "sam"){
  if(!username){
      console.log("PLease enter a username");
      return
  }
  return `${username} just logged in`
}

console.log(loginUserMessage("hitesh"))
 console.log(loginUserMessage("hitesh"))
