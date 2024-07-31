for (let index = 1; index <=10; index++) {
  // if ( index == 5)
    console.log(`this is inner , ${index}`);

  for(let j =1; j <=10 ; j++)
    console.log(`this is outer loop , ${j} , ${index}`)
}
