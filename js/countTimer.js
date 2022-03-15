const marriedDate = new Date("2019-12-07T19:00:00-03:00");

const timing = setInterval(function () {
  let currentDate = new Date().getTime();
  let timeLeft = marriedDate - currentDate;
  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  if (days < 10) days = "0" + days;
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
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

    let years = Math.floor(accumulatedTime / (365 * 24 * 60 * 60 * 1000));
    let months = Math.floor(
      (accumulatedTime % (365 * 24 * 60 * 60 * 1000)) /
        (30 * 24 * 60 * 60 * 1000)
    );

    days = Math.floor(
      (accumulatedTime % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
    );

    hours = Math.floor(
      (accumulatedTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
    );

    minutes = Math.floor((accumulatedTime % (60 * 60 * 1000)) / (60 * 1000));
    seconds = Math.floor((accumulatedTime % (60 * 1000)) / 1000);

    if (years < 10) years = "0" + years;
    if (months < 10) months = "0" + months;
    if (days < 10) days = "0" + days;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
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
