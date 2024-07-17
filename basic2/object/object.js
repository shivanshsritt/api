// object declaration


const mysymbol = Symbol("key1");


const  user =  {
"name"  : "shivansh",
degree : "btech",
[mysymbol]: "mykeys1",

}
console.log(typeof user.name)
console.log(typeof user["name"]);
console.log(typeof user)
console.log(typeof mysymbol);
console.log(user[mysymbol]);




// const tinderuser = new Object ()

const instauser = {}

instauser.id ="shivansh",
instauser.degree = "btech"

// console.log(instauser)

// Declare symbols
const friends  = Symbol ("key1")

const randomFriend =  {
 baklol : " kamal",

 chutiya: "gagan", 
[friends] : "anuj",


}
console.log(randomFriend.baklol);
console.log(randomFriend.chutiya);
console.log(randomFriend.friends);
randomFriend.baklol= "shivansh"
console.log(randomFriend.baklol)
Object.freeze(randomFriend)
randomFriend.baklol= "sonu";
console.log(randomFriend.baklol)