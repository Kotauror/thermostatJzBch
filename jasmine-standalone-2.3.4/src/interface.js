window.onload = function() {

};


$( document ).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  updateMode();
  updateUsage();

  $('#number').text(thermostat.temperature);

  $('#mode').text(thermostat.mode);

  $('#usageinfo').text(thermostat.usage());

  $('#switch').click(function(e) {
  thermostat.changeMode();
  updateMode();
    });

  $('#reset').click(function() {
  thermostat.reset();
  updateTemperature();
  updateMode();
  });

  $('.city_form').submit(function(e) {
    e.preventDefault();
    var city = $( ".city" ).val();
    var weather = $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=48e7a56793fa02078630b7e07b5342ad", function(cityTemperature){
    var temp = cityTemperature.main.temp;
    var humidity = cityTemperature.main.humidity;
    var clouds = cityTemperature.clouds.all;
    console.log(clouds);
    console.log(temp);


    $('#city').text(city);
    $('#city').prepend("City: ")
    $('#maxtemp').text(maxtemp);
    $('#maxtemp').prepend("Maximum temperature: ");
    $('#mintemp').text(mintemp);
    $('#mintemp').prepend("Minimum temperature: ");
    $('#humidity').text(humidity+"%")
    $('#humidity').prepend("Humidity: ");
    $('#clouds').text(clouds+"%")
    $('#clouds').prepend("Cloudiness: ");

    if( clouds > 80) {
      $('#message').text("is pretty cloudy, it might rain, stay HOME!!!");
    }
    if ((mintemp / 32) < 5){
      $('#message').text("it's cold, you might consider wearing a jumper or increase your temperature");
    }
    if ((maxtemp / 32) > 20){
      $('#message').text("Turn off the thermostat, save the planet!!!")
    }
    })

  })

  $('.increase_form').submit(function(e) {
    console.log(e);
    e.preventDefault();
    var value = $( ".input_form" ).val();
    thermostat.increase(parseInt(value))
    updateTemperature()
    updateMode();
    updateUsage();
    thermostat.maxTemperatureAlert()
  })

  $('#increase').click(function(){
    thermostat.increaseByOne();
    updateTemperature();
    updateUsage();
  })

  $('.decrease_form').submit(function(e) {
    e.preventDefault();
    thermostat.decrease(parseInt(e.target.temperature.value))
    updateTemperature()
    updateMode();
    updateUsage();
    thermostat.minTemperatureAlert()
  })

  $('#decrease').click(function(){
    thermostat.decreaseByOne();
    updateTemperature();
    updateUsage();
  })

  $("a").click(function () {
        $("footer").fadeOut("slow");
    });

  function updateTemperature() {
    $('#number').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.usage());
  }

  function updateMode() {
    $('#mode').text(thermostat.mode);
  }

  function updateUsage() {
    $('#usageinfo').text(thermostat.usage());
  }


})
