function timer() {
  var date = new Date
  var hours = date.getHours()
  //var hours = 88
  var minutes = date.getMinutes()
  // var minutes = 1

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  document.getElementById("hr").textContent = hours;
  document.getElementById("min").textContent = minutes;
  setTimeout('timer()', 1000);
}
