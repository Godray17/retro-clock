function timer() {
  var date = new Date
  var hours = date.getHours()
  var minutes = date.getMinutes()

  document.getElementById("hr").textContent = hours;
  document.getElementById("min").textContent = minutes;
  setTimeout('timer()', 1000);
}
