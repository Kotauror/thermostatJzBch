$( document ).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  updateMode();

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
    console.log(e)
    e.preventDefault();
    thermostat.increase(parseInt(e.target.temperature.value))
    updateTemperature()
    thermostat.maxTemperatureAlert()
  })

  $('.decrease_form').submit(function(e) {
    e.preventDefault();
    thermostat.decrease(parseInt(e.target.temperature.value))
    updateTemperature()
    thermostat.minTemperatureAlert()
  })

  function updateTemperature() {
    $('#number').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.usage());
  }

  function updateMode() {
    $('#mode').text(thermostat.mode);
  }


})
