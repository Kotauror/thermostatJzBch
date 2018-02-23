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
