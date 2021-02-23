function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var today = new Date();
    var ist_h = today.getHours();
    var ist_m = today.getMinutes();
    var ist_s = today.getSeconds();
    var utc_h = today.getUTCHours();
    var utc_m = today.getUTCMinutes();
    var utc_s = today.getUTCSeconds();
    // add a zero in front of numbers<10
    ist_m = checkTime(ist_m);
    ist_s = checkTime(ist_s);
    utc_m = checkTime(utc_m);
    utc_s = checkTime(utc_s);
    document.getElementById('ist').innerHTML = ist_h + ":" + ist_m + ":" + ist_s;
    document.getElementById('utc').innerHTML = utc_h + ":" + utc_m + ":" + utc_s;
    t = setTimeout(function() {
      startTime()
    }, 500);
  }

  startTime();