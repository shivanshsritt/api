const userinsta = {
username: "shivanshsrit",
password   : 6117,
price : 999,
welcome : function (){
  console.log(`${this.username}, welcome to webisite `);
}
}
userinsta.welcome()
userinsta.username= "hello"

userinsta.welcome()
function chai ( ){
  console.log(this);
}
chai()