function timer() {
  var date = new Date;
  var hours = date.getHours();
  //var hours = 11;
  var minutes = date.getMinutes();
  // var minutes = 1

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  let first_number_hour = hours / 10 >> 0;
  let second_number_hour = hours % 10;

  let first_number_minutes = minutes / 10 >> 0;
  let second_number_minutes = minutes % 10;

  if (first_number_hour == 1) {
    bh_1.classList.add("light")
  } else {
    bh_1.classList.remove("light")
  }

  if (first_number_hour == 2) {
    bh_2.classList.add("light")
  } else {
    bh_2.classList.remove("light")
  }

  if (second_number_hour == 1) {
    bh_01.classList.add("light")
  } else if (second_number_hour == 3) {
    bh_01.classList.add("light")
  } else if (second_number_hour == 5) {
    bh_01.classList.add("light")
  } else if (second_number_hour == 7) {
    bh_01.classList.add("light")
  } else if (second_number_hour == 9) {
    bh_01.classList.add("light")
  } else {
    bh_01.classList.remove("light")
  }

  if (second_number_hour == 2) {
    bh_02.classList.add("light")
  } else if (second_number_hour == 3) {
    bh_02.classList.add("light")
  } else if (second_number_hour == 6) {
    bh_02.classList.add("light")
  } else {
    bh_02.classList.remove("light")
  }

  if (second_number_hour == 4) {
    bh_03.classList.add("light")
  } else if (second_number_hour == 5) {
    bh_03.classList.add("light")
  } else if (second_number_hour == 6) {
    bh_03.classList.add("light")
  } else if (second_number_hour == 7) {
    bh_03.classList.add("light")
  } else {
    bh_03.classList.remove("light")
  }

  if (second_number_hour == 8) {
    bh_04.classList.add("light")
  } else if (second_number_hour == 9) {
    bh_04.classList.add("light")
  } else {
    bh_04.classList.remove("light")
  }


  //минуты

  if (second_number_minutes == 1) {
    bm_01.classList.add("light")
  } else if (second_number_minutes == 3) {
    bm_01.classList.add("light")
  } else if (second_number_minutes == 5) {
    bm_01.classList.add("light")
  } else if (second_number_minutes == 7) {
    bm_01.classList.add("light")
  } else if (second_number_minutes == 9) {
    bm_01.classList.add("light")
  } else {
    bm_01.classList.remove("light")
  }

  if (second_number_minutes == 2) {
    bm_02.classList.add("light")
  } else if (second_number_minutes == 3) {
    bm_02.classList.add("light")
  } else if (second_number_minutes == 6) {
    bm_02.classList.add("light")
  } else {
    bm_02.classList.remove("light")
  }

  if (second_number_minutes == 4) {
    bm_03.classList.add("light")
  } else if (second_number_minutes == 5) {
    bm_03.classList.add("light")
  } else if (second_number_minutes == 6) {
    bm_03.classList.add("light")
  } else if (second_number_minutes == 7) {
    bm_03.classList.add("light")
  } else {
    bm_03.classList.remove("light")
  }

  if (second_number_minutes == 8) {
    bm_04.classList.add("light")
  } else if (second_number_minutes == 9) {
    bm_04.classList.add("light")
  } else {
    bm_04.classList.remove("light")
  }

  if (first_number_minutes == 1) {
    bm_1.classList.add("light")
  } else if (first_number_minutes == 3) {
    bm_1.classList.add("light")
  } else if (first_number_minutes == 5) {
    bm_1.classList.add("light")
  } else if (first_number_minutes == 7) {
    bm_1.classList.add("light")
  } else if (first_number_minutes == 9) {
    bm_1.classList.add("light")
  } else {
    bm_1.classList.remove("light")
  }

  if (first_number_minutes == 2) {
    bm_2.classList.add("light")
  } else if (first_number_minutes == 3) {
    bm_2.classList.add("light")
  } else if (first_number_minutes == 6) {
    bm_2.classList.add("light")
  } else {
    bm_2.classList.remove("light")
  }

  if (first_number_minutes == 4) {
    bm_3.classList.add("light")
  } else if (first_number_minutes == 5) {
    bm_3.classList.add("light")
  } else if (first_number_minutes == 6) {
    bm_3.classList.add("light")
  } else if (first_number_minutes == 7) {
    bm_3.classList.add("light")
  } else {
    bm_3.classList.remove("light")
  }

  if (first_number_minutes == 8) {
    bm_4.classList.add("light")
  } else if (first_number_minutes == 9) {
    bm_4.classList.add("light")
  } else {
    bm_4.classList.remove("light")
  }



  document.getElementById("hr").textContent = hours;
  document.getElementById("min").textContent = minutes;
  setTimeout('timer()', 1000);
}

let clocker = document.getElementById("clocker");

let binary_clocker = document.getElementById("binary_clocker");

let toggle = document.getElementById("toggle");
toggle.onclick = function() {
  clocker.classList.toggle("invisible")
  binary_clocker.classList.toggle("invisible")
};
