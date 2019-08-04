var yourDateToGo = new Date(2019, 11, 07, 19, 00, 00, 0);

yourDateToGo.setDate(yourDateToGo.getDate());

var timing = setInterval(
function ()
{

	var currentDate = new Date().getTime(); //same thing as above
	var timeLeft = yourDateToGo - currentDate; //difference between time you set and now in miliseconds

	var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); //conversion miliseconds on days 
	if (days < 10) days="0"+days; //if number of days is below 10, programm is writing "0" before 9, that's why you see "09" instead of "9"
	var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); //conversion miliseconds on hours
	if (hours < 10) hours="0"+hours;
	var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)); //conversion miliseconds on minutes 
	if (minutes < 10) minutes="0"+minutes;
	var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);//conversion miliseconds on seconds
	if (seconds < 10) seconds="0"+seconds;

document.getElementById("countdown").innerHTML =  "<div class='placar'>" +
        "<div class='numbers'>" + days + "</div>" +
        "<div class='colon'>:</div> " +
        "<div class='numbers'>" + hours + "</div> " +
        "<div class='colon'>:</div> " +
        "<div class='numbers'>" + minutes + "</div> " +
        "<div class='colon'>:</div> " +
        "<div class='numbers'>" + seconds + "</div> " +
      "</div> " +  
      "<div class='labels'> " +
        "<div>Dias</div> " +
        "<div>Horas</div> " +
        "<div>Min</div> " +
        "<div>Seg</div> " +
      "</div>";  

if (timeLeft <= 0) 
{
	document.getElementById("countdown").innerHTML = "<h1>Enfim casados!</h1>";
	return true; 
}}, 1000);

