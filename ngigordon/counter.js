var resetbtn=document.getElementById("resetbtn");
console.log('hello-world');
var start_point = 5;
var item_container = document.getElementById("target");
var myinterval = setInterval(()=>frame(myinterval), 1000);
function frame(target){
    if(start_point === 0){
      clearInterval(target)
    }
    item_container.innerHTML= start_point
    start_point--
    console.log("i love my world")
    
}
resetbtn.addEventListener("click",()=>{
    console.log("my world");
    start_point=5
    var newRefresh = setInterval(()=>frame(newRefresh), 1000); 
})

// for hiding navbar
var icon=document.getElementById("icon")
var y=document.getElementById("mytopnav")
icon.addEventListener('click', ()=>{
if(y.className==="topnav"){
  y.className = "responsive"
}else{
  y.className = "topnav"
}
})