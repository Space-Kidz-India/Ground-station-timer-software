function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var today = new Date();
    var launch_day = new Date('February 26, 2021 05:13:00');
    var ist_h = today.getHours();
    var ist_m = today.getMinutes();
    var ist_s = today.getSeconds();
    var utc_h = today.getUTCHours();
    var utc_m = today.getUTCMinutes();
    var utc_s = today.getUTCSeconds();
    // add a zero in front of numbers<10
    ist_h = checkTime(ist_h);
    ist_m = checkTime(ist_m);
    ist_s = checkTime(ist_s);
    utc_h = checkTime(utc_h);
    utc_m = checkTime(utc_m);
    utc_s = checkTime(utc_s);
    var elapsed = parseInt((Date.now() - launch_day)/1000);
    if(elapsed < 0){
      var sign = "-";
      elapsed = elapsed*-1
      elapsed+=1
    }else{
      var sign = "+";
    }
    var secs_elapsed = elapsed % 60
    elapsed -= secs_elapsed;
    elapsed /= 60;
    var mins_elapsed = elapsed%60;
    elapsed -= mins_elapsed;
    var hrs_elapsed = elapsed/60;
    hrs_elapsed = checkTime(parseInt(hrs_elapsed));
    mins_elapsed = checkTime(parseInt(mins_elapsed));
    secs_elapsed = checkTime(parseInt(secs_elapsed));
    // console.log(hrs_elapsed + ":" + mins_elapsed + ":" + secs_elapsed);
    document.getElementById('ist').innerHTML = ist_h + ":" + ist_m + ":" + ist_s;
    document.getElementById('utc').innerHTML = utc_h + ":" + utc_m + ":" + utc_s;
    document.getElementById('time_elapsed').innerHTML = sign+" "+hrs_elapsed + ":" + mins_elapsed + ":" + secs_elapsed;
    
    t = setTimeout(function() {
      startTime()
    }, 500);
  }

  startTime();
