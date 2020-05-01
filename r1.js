function clockTime(){
	const fullTime = new Date();
	var hours = fullTime.getHours();
	var mins = fullTime.getMinutes();
	var secs = fullTime.getSeconds();

	if(hours<10){
		hours = "0" + hours;
	}
	if(mins<10){
		mins = "0" + mins;
	}
	if(secs<10){
		secs = "0" + secs;
	}
	document.getElementById("hour").innerHTML=hours;
	document.getElementById("min").innerHTML= ": " + mins;
	document.getElementById("sec").innerHTML=": " + secs;
}

setInterval(clockTime, 1000);