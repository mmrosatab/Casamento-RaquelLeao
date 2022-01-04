const marriedDate = new Date("2019-12-07T19:00:00-03:00");
// const marriedDate = new Date("2022-01-04T19:00:00-03:00");

const timing = setInterval(function () {
  let currentDate = new Date().getTime(); //same thing as above
  let timeLeft = marriedDate - currentDate; //difference between time you set and now in miliseconds

  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); //conversion miliseconds on days
  if (days < 10) days = "0" + days; //if number of days is below 10, programm is writing "0" before 9, that's why you see "09" instead of "9"
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); //conversion miliseconds on hours
  if (hours < 10) hours = "0" + hours;
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)); //conversion miliseconds on minutes
  if (minutes < 10) minutes = "0" + minutes;
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000); //conversion miliseconds on seconds
  if (seconds < 10) seconds = "0" + seconds;

  document.getElementById("counter-title").innerHTML =
    "<h3>Contagem regressiva</h3>";

  document.getElementById("counter").innerHTML =
    "<div class='placar'>" +
    "<div class='numbers'>" +
    days +
    "</div>" +
    "<div class='colon'>:</div> " +
    "<div class='numbers'>" +
    hours +
    "</div> " +
    "<div class='colon'>:</div> " +
    "<div class='numbers'>" +
    minutes +
    "</div> " +
    "<div class='colon'>:</div> " +
    "<div class='numbers'>" +
    seconds +
    "</div> " +
    "</div> " +
    "<div class='labels'> " +
    "<div>Dias</div> " +
    "<div>Horas</div> " +
    "<div>Min</div> " +
    "<div>Seg</div> " +
    "</div>";

  if (timeLeft <= 0) {
    let accumulatedTime = currentDate - marriedDate;

    let years = Math.floor(accumulatedTime / (1000 * 60 * 60 * 24 * 365));
    let months = Math.floor(accumulatedTime / (1000 * 60 * 60 * 24 * 30.5));
    months = months % 12 > 10 ? months : 0;

    days = Math.floor(accumulatedTime / (1000 * 60 * 60 * 24));
    if (days < 10) days = "0" + days;
    hours = Math.floor(
      (accumulatedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    if (hours < 10) hours = "0" + hours;
    minutes = Math.floor((accumulatedTime % (1000 * 60 * 60)) / (1000 * 60));
    if (minutes < 10) minutes = "0" + minutes;
    seconds = Math.floor((accumulatedTime % (1000 * 60)) / 1000);
    if (seconds < 10) seconds = "0" + seconds;

    document.getElementById("counter-title").innerHTML =
      "<h3>Tempo de casados</h3>";

    document.getElementById("counter").innerHTML = document.getElementById(
      "counter"
    ).innerHTML =
      "<div class='placar2'>" +
      "<div class='numbers2'>" +
      years +
      "</div>" +
      "<div class='colon'>:</div> " +
      "<div class='numbers2'>" +
      months +
      "</div>" +
      "<div class='colon'>:</div> " +
      "<div class='numbers2'>" +
      days +
      "</div>" +
      "<div class='colon'>:</div> " +
      "<div class='numbers2'>" +
      hours +
      "</div> " +
      "<div class='colon'>:</div> " +
      "<div class='numbers2'>" +
      minutes +
      "</div> " +
      "<div class='colon'>:</div> " +
      "<div class='numbers2'>" +
      seconds +
      "</div> " +
      "</div> " +
      "<div class='labels2'> " +
      "<div>Anos</div> " +
      "<div>Meses</div> " +
      "<div>Dias</div> " +
      "<div>Horas</div> " +
      "<div>Min</div> " +
      "<div>Seg</div> " +
      "</div>";
    return true;
  }
}, 1000);
