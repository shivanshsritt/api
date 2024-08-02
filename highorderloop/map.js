const map = new Map()


map.set ("in "  , 'india'   )
map.set ("usa"  , 'america' )
map.set ("fr "  , 'france'  )

// console.log(map)

for (const [key,value]  of map) {
  // console.log(key ,value);
}



const language = {
cpp : "c++",
js: "javascript ",
py :  "python "
}

for (const key in language) {
  
  console.log(`${key} language extnesion ${language[key]}   `);
    
  }



  const  heros=  ["saktiman ", "ironman" , "flash"]
  for (const key in heros) {
   console.log(key);
    
      
    }
  