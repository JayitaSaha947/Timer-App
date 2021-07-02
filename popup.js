
 var minutes =0;
 var seconds =1;

var display_minutes;
var display_seconds;

var click = new Audio("click.wav");
var bell = new Audio("bell.wav");

 function stop(){
    bell.play();
    clearInterval(second_interval);
    clearInterval(minute_interval);
    }

var e1=document.getElementById("start");
if(e1){
    e1.addEventListener("click",begin1);
}
var e2=document.getElementById("short");
 if(e2){
    e2.addEventListener("click", begin2);
 }

function begin1(){
 	click.play();
    document.getElementById("second").innerHTML = "0"+seconds.toString();
 	minute_interval = setInterval(minutesTimer1,60000);
 	second_interval = setInterval(secondsTimer1,1000);

 }

 function begin2(){
    click.play();
    document.getElementById("second").innerHTML = "0"+seconds.toString();
    minute_interval = setInterval(minutesTimer2,60000);
    second_interval = setInterval(secondsTimer2,1000);

 }
 	function minutesTimer1(){
 		minutes = minutes+1;
 		display_minutes = minutes;
 		if(minutes==25){
            stop();
        }
 		document.getElementById("minute").innerHTML = display_minutes;
  	}
 	function secondsTimer1(){
 		if(seconds<9){
 		seconds = seconds+1;
 		display_seconds = "0"+seconds.toString();
 		}	
 		else{
 			seconds=seconds+1;
 			display_seconds=seconds;
 		}
 		document.getElementById("second").innerHTML = display_seconds;

 		if(seconds>58){
 			seconds = -1;
 		}
 	}
    function minutesTimer2(){
            minutes = minutes+1;
            display_minutes = minutes;
            if (minutes==5) {
                stop();
            }
        document.getElementById("minute").innerHTML = display_minutes;
    }
    function secondsTimer2(){
        if(seconds<9){
            seconds=seconds+1;
            display_seconds="0"+seconds.toString();
        }
        else{
            seconds=seconds+1;
            display_seconds=seconds;
        }
        document.getElementById("second").innerHTML = display_seconds;

        if(display_seconds==59){
            seconds = -1;
        }
    }

 

 
