/******************* 
  DIMANIC DATE OUTPUT
********************/

function currentDate() {
    var d = new Date();
    // Days
    var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    // Months
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var ye = d.getFullYear();
    var dayNum = d.getDate();
    var day = weekday[d.getDay()];
    var m = month[d.getMonth()];
    var hours = d.getHours();
    var mins = d.getMinutes();
    if(mins < 10) mins = '0' + mins;
    let today = m + " " + dayNum + ", " + ye + " " + hours + ":" + mins;
    console.log(today);
    document.getElementById("currentDate").innerHTML = today;

    // TODAY TIME DATE
    document.getElementsByClassName("day")[0].innerHTML = day;
    document.getElementsByClassName("month")[0].innerHTML = m;
    document.getElementsByClassName("dayNum")[0].innerHTML = dayNum;
    
    /********************
    FOUR FOLLOWING DAYS
    ********************/
    var tomorrow, nextDay, nextNextDay, thirdDay;

    switch (day) {
      case "Sun":
        tomorrow = "Mon";
        document.getElementsByClassName("day")[1].innerHTML = tomorrow;
        nextDay = "Tue";
        document.getElementsByClassName("day")[2].innerHTML = nextDay;
        nextNextDay = "Wed";
        document.getElementsByClassName("day")[3].innerHTML = nextNextDay;
        thirdDay = "Thu";
        document.getElementsByClassName("day")[4].innerHTML = thirdDay;
        break;
      case "Mon":
        tomorrow = "Tue";
        document.getElementsByClassName("day")[1].innerHTML = tomorrow;
        nextDay = "Wed";
        document.getElementsByClassName("day")[2].innerHTML = nextDay;
        nextNextDay = "Thu";
        document.getElementsByClassName("day")[3].innerHTML = nextNextDay;
        thirdDay = "Fri";
        document.getElementsByClassName("day")[4].innerHTML = thirdDay;
        break;
      case "Tue":
        tomorrow = "Wed";
        document.getElementsByClassName("day")[1].innerHTML = tomorrow;
        nextDay = "Thu";
        document.getElementsByClassName("day")[2].innerHTML = nextDay;
        nextNextDay = "Fri";
        document.getElementsByClassName("day")[3].innerHTML = nextNextDay;
        thirdDay = "Sat";
        document.getElementsByClassName("day")[4].innerHTML = thirdDay;
        break;
      case "Wed":
        tomorrow = "Thu";
        document.getElementsByClassName("day")[1].innerHTML = tomorrow;
        nextDay = "Fri";
        document.getElementsByClassName("day")[2].innerHTML = nextDay;
        nextNextDay = "Sat";
        document.getElementsByClassName("day")[3].innerHTML = nextNextDay;
        thirdDay = "Sun";
        document.getElementsByClassName("day")[4].innerHTML = thirdDay;
        break;
      case "Thu":
        tomorrow = "Fri";
        document.getElementsByClassName("day")[1].innerHTML = tomorrow;
        nextDay = "Sat";
        document.getElementsByClassName("day")[2].innerHTML = nextDay;
        nextNextDay = "Sun";
        document.getElementsByClassName("day")[3].innerHTML = nextNextDay;
        thirdDay = "Mon";
        document.getElementsByClassName("day")[4].innerHTML = thirdDay;
        break;
      case "Fri":
        tomorrow = "Sat";
        document.getElementsByClassName("day")[1].innerHTML = tomorrow;
        nextDay = "Sun";
        document.getElementsByClassName("day")[2].innerHTML = nextDay;
        nextNextDay = "Mon";
        document.getElementsByClassName("day")[3].innerHTML = nextNextDay;
        thirdDay = "Tue";
        document.getElementsByClassName("day")[4].innerHTML = thirdDay;
        break;
      case "Sat":
        tomorrow = "Sun";
        document.getElementsByClassName("day")[1].innerHTML = tomorrow;
        nextDay = "Mon";
        document.getElementsByClassName("day")[2].innerHTML = nextDay;
        nextNextDay = "Tue";
        document.getElementsByClassName("day")[3].innerHTML = nextNextDay;
        thirdDay = "Wed";
        document.getElementsByClassName("day")[4].innerHTML = thirdDay;
        break;
    }
  }
  currentDate();