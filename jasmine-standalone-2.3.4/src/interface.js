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
    $('html').attr('class', 'normal')
    $('#message').text('');
    $('#message2').text('');
    var city = $( ".city" ).val();
    var weather = $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=48e7a56793fa02078630b7e07b5342ad", function(cityTemperature){
    var tempo = cityTemperature.main.temp;
    var humidity = cityTemperature.main.humidity;
    var clouds = cityTemperature.clouds.all;
    $('#city').text(city);
    $('#city').prepend("City: ")
    $('#temp').text(Math.floor(tempo - 273.15));
    $('#temp').prepend("Temperature: ");
    $('#humidity').text(humidity+"%")
    $('#humidity').prepend("Humidity: ");
    $('#clouds').text(clouds+"%")
    $('#clouds').prepend("Cloudiness: ");
    displayMessageClouds(clouds);
    displayMessageTemp(tempo);
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

  function displayMessageClouds(clouds) {
    if( clouds >= 75) {
      $('#message2').text("Is pretty cloudy, watch out for the rain.");
      $('html').attr('class', 'clouds');
    }
  }

  function displayMessageTemp(tempo) {
    if ((tempo - 273.15) < 5){
      $('#message').text("It's cold, you might consider wearing a jumper or increasing your temperature.");
    }
    if ((tempo - 273.15) < 0){
      $('#message').text("It's freezing outside, at least make your home warm.");
      $('html').attr('class', 'freezing')
    }
    if ((tempo - 273.15) > 20){
      $('#message').text("Turn off the thermostat, save the planet!");
      $('html').attr('class', 'hot')
    }
  }

})
