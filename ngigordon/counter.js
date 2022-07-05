var resetbtn=document.getElementById("resetbtn");
console.log('hello-world');
let start_point=5;
var item_container = document.getElementById("target");
var myinterval = setInterval(()=>frame(myinterval), 1000);
function frame(target){
    if(start_point === 0){
      clearInterval(target)
    }
    item_container.innerHTML= start_point;
    start_point--;
    }
resetbtn.addEventListener("click",(e)=>{
  e.preventDefault();
  let start = 5
    var newRefresh = setInterval(()=>
 {
  if(start === 0){
    clearInterval(newRefresh)
  }
  item_container.innerHTML= start;
  start--;
 }
    , 1000); 
})

// for hiding navbar
var icon=document.getElementById("icon");
var y=document.getElementById("mytopnav")
icon.addEventListener('click', ()=>{
if(y.className==="topnav"){
  y.className = "responsive"
}else{
  y.className = "topnav"
}
})