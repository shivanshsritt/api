const stduent = {
  name : "john",
  age : 21,
  sunject :[ "math ", "science" ,"history" ]
}
stduent.isgraduated= false;
function addsubject (newsubject ){
  stduent.subjects.push(newsubject)
}
addsubject("english")
console.log(stduent);