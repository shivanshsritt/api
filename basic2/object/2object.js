// first way to declare to object 
// single ton object 
const tinderuser = new Object ( );
// console.log(tinderuser);

tinderuser.id = 6117;
tinderuser.name= "shivanshsrit";
tinderuser.issLoggedin = true;

// key must important 

 console.log(Object.keys(tinderuser));
 console.log(Object.values(tinderuser));
 console.log(Object.entries(tinderuser));
 console.log(tinderuser.hasOwnProperty('issLoggedin'));

// Non-single ton object 
// second way to declare object 
const newuser = { 
email: "shivanshsrit@gmail.com",
fullname:{
  fulluserName: {
    firstname : "shivansh",
    surname   : "srivastava",
    }
}

};
// console.log(newuser.fullname.fulluserName);