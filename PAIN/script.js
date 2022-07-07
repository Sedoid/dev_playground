var startingPoint = 60

function Countdown(start_value){
// document.getElementById("starts").innerHTML=startingPoint ;
var target = document.getElementById("starts");
console.log(target)
target.textContent = start_value
}

// create an interval that Coundown every one second (1000)

var the_id = setInterval(function(){

    startingPoint = startingPoint - 1

    if(startingPoint ==0){
        Countdown(startingPoint)
        clearInterval(the_id)
    }else{
           Countdown(startingPoint)
    }
 
},1000)
Countdown();









