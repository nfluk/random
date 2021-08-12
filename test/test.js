function bake(degrees) {
	var message;
	
	if(degrees > 9000) {
		message = "AHHH!! IT'S OVER 9000!!!!!";
	} else if(degrees > 500) {
		message = "I am not a nuclear reactor!";
	} else if(degrees < 100) {
		message = "I am not a refrigerator!";
	} else {
		message = "That is a very comfortable temperature for me.";
	}
	
	return(message);
}

var status1 = bake(350);
var status2 = bake(20);
var status3 = bake(550);
var status4 = bake(9050);

document.write(status2);
document.write('<br/>');
document.write(status1);
document.write('<br/>');
document.write('<br/>');
document.write(status4);