//  first function 

 function  mathmarks () {
  const mathm = 56

  // second function 

  function sciencemarks () {
    const scienc = "youtube"
    console.log(mathm);
    console.log(scienc);
  }
 
//  console.log(scienc);
 sciencemarks()
}

mathmarks()



// function name ()
// {
//   let username = "shivansh"
//   console.log(username)

// }

// name()




// in nested function child function can assess parents function



function add (num){

  return num + 1
  function second(){
    add +num
  }

}
console.log(add(5))
