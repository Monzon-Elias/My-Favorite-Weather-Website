
function search() {
  // Get the value from the search box
  let cityNameFromInput = location.search.slice(3);
  console.log(cityNameFromInput);
  capitalizeFirstLetter = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  cityNameFromInput = capitalizeFirstLetter(cityNameFromInput);

  //CITY WEATHER TODAY
  const URL = "https://api.openweathermap.org/data/2.5/weather?q="
    + cityNameFromInput + "&units=metric&APPID=a32e0cfb6e9e6e82de1d76a56ea7f588";

  async function getCityWeather() {
    try {
      const response = await fetch(URL);
      const jsonData = await response.json();
      console.log(jsonData);

      if (jsonData.cod != 200) {
        document.getElementById("cityName").innerHTML = "Sorry, City not found";
        let main = document.getElementById("main");
        main.style.visibility = "hidden";
      }
      let cityName = jsonData.name;
      let country = jsonData.sys.country;
      let cityTemp = jsonData.main.temp;
      let cityFL = jsonData.main.feels_like;
      let cityIcon = jsonData.weather[0].icon;
      let cityWeatherDesc = jsonData.weather[0].main;

      //CITY NAME
      document.getElementById("cityName").innerHTML = cityName + ", " + country;

      //CITY TEMP IN CELCIUS
      document.getElementById("cityTemp").innerHTML = cityTemp + " &deg;C";

      //CITY FEEL-LIKE IN CELCIUS
      document.getElementsByClassName("wch")[0].innerHTML = cityFL + " &deg;C";

      //CITY WEATHER ICON
      document.getElementById("cityIcon").src = "https://openweathermap.org/img/wn/" + cityIcon + "@2x.png";

      //CITY WEATHER MAIN DESCRIPTION
      document.getElementById("cityWeatherDesc").innerHTML = cityWeatherDesc;

      //*************************************
      //********CITY WEATHER 4 DAYS*********
      //*************************************

      const URL2 = "https://api.openweathermap.org/data/2.5/forecast?q="
        + cityName + "," + country + "&units=metric&APPID=a32e0cfb6e9e6e82de1d76a56ea7f588";
      const response2 = await fetch(URL2);
      const jsonData2 = await response2.json();
      console.log(jsonData2);

      //===============
      //4 DAYS MONTHS
      //===============

      //TOMORROW MONTH
      let tomorrowMonth = jsonData2.list[4].dt_txt.substr(8, 2);
      document.getElementsByClassName("month")[1].innerHTML = tomorrowMonth;
      //NETX DAY MONTH
      let nextDayMonth = jsonData2.list[12].dt_txt.substr(8, 2);
      document.getElementsByClassName("month")[2].innerHTML = nextDayMonth;
      //NETX NETX DAY MONTH
      let nextNextDayMonth = jsonData2.list[20].dt_txt.substr(8, 2);
      document.getElementsByClassName("month")[3].innerHTML = nextNextDayMonth;
      //3TH DAY MONTH
      let thirdDayMonth = jsonData2.list[28].dt_txt.substr(8, 2);
      document.getElementsByClassName("month")[4].innerHTML = thirdDayMonth;

      //===============
      //FOUR DAYS ICONS
      //===============

      //TOMORROW ICON
      let cityIcon1 = jsonData2.list[4].weather[0].icon;
      document.getElementById("cityIcon1").src = "https://openweathermap.org/img/wn/" + cityIcon1 + "@2x.png";
      //NEXT DAY ICON
      let cityIcon2 = jsonData2.list[12].weather[0].icon;
      document.getElementById("cityIcon2").src = "https://openweathermap.org/img/wn/" + cityIcon2 + "@2x.png";
      //NEXT NEXT DAY ICON
      let cityIcon3 = jsonData2.list[20].weather[0].icon;
      document.getElementById("cityIcon3").src = "https://openweathermap.org/img/wn/" + cityIcon3 + "@2x.png";
      //3TH DAY ICON
      let cityIcon4 = jsonData2.list[28].weather[0].icon;
      document.getElementById("cityIcon4").src = "https://openweathermap.org/img/wn/" + cityIcon4 + "@2x.png";

      //===========================
      //FOUR DAYS TEMPERATURES
      //===========================

      //TOMORROW TEMP
      let cityTemp1 = jsonData2.list[4].main.temp;
      document.getElementById("cityTemp1").innerHTML = cityTemp1 + " &deg;C";
      //NEXT DAY TEMP
      let cityTemp2 = jsonData2.list[12].main.temp;
      document.getElementById("cityTemp2").innerHTML = cityTemp2 + " &deg;C";
      //NEXT NEXT DAY TEMP
      let cityTemp3 = jsonData2.list[20].main.temp;
      document.getElementById("cityTemp3").innerHTML = cityTemp3 + " &deg;C";
      //3TH DAY TEMP
      let cityTemp4 = jsonData2.list[28].main.temp;
      document.getElementById("cityTemp4").innerHTML = cityTemp4 + " &deg;C";

      //===========================
      //FOUR DAYS FEEL-LIKE
      //===========================

      //TOMORROW FEEL-LIKE
      let cityFL1 = jsonData2.list[4].main.feels_like;
      document.getElementsByClassName("wch")[1].innerHTML = cityFL1 + " &deg;C";
      //NEXT DAY FEEL-LIKE
      let cityFL2 = jsonData2.list[12].main.temp;
      document.getElementsByClassName("wch")[2].innerHTML = cityFL2 + " &deg;C";
      //NEXT NEXT DAY FEEL-LIKE
      let cityFL3 = jsonData2.list[20].main.temp;
      document.getElementsByClassName("wch")[3].innerHTML = cityFL3 + " &deg;C";
      //3TH DAY FEEL-LIKE
      let cityFL4 = jsonData2.list[28].main.temp;
      document.getElementsByClassName("wch")[4].innerHTML = cityFL4 + " &deg;C";

      //===========================
      //FOUR DAYS MAIN DESCRIPTIONS
      //===========================

      //TOMORROW CITY MAIN DESC
      let cityWeatherDesc1 = jsonData2.list[4].weather[0].main;
      document.getElementById("cityWeatherDesc1").innerHTML = cityWeatherDesc1;
      //NEXT DAY CITY MAIN DESC
      let cityWeatherDesc2 = jsonData2.list[12].weather[0].main;
      document.getElementById("cityWeatherDesc2").innerHTML = cityWeatherDesc2;
      //NEXT NEXT DAY CITY MAIN DESC
      let cityWeatherDesc3 = jsonData2.list[20].weather[0].main;
      document.getElementById("cityWeatherDesc3").innerHTML = cityWeatherDesc3;
      //3TH DAY CITY MAIN DESC
      let cityWeatherDesc4 = jsonData2.list[28].weather[0].main;
      document.getElementById("cityWeatherDesc4").innerHTML = cityWeatherDesc4;
    } catch (e) {
      throw Error(e);
    }
  }
  getCityWeather();
}