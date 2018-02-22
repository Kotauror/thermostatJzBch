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
    // console.log(e.target.input.value)
    thermostat.increase(parseInt(e.target.temperature.value))
    updateTemperature()
    thermostat.maxTemperatureAlert()
  })

  $('.decrease_form').submit(function(e) {
    // console.log(e)
    e.preventDefault();
    // console.log(e.target.input.value)
    thermostat.decrease(parseInt(e.target.temperature.value))
    updateTemperature()
    thermostat.minTemperatureAlert()
  })

  $( "#target" ).submit(function( event ) {
    alert( "Handler for .submit() called." );
    event.preventDefault();
  });

  function updateTemperature() {
    $('#number').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.usage());
  }

  function updateMode() {
    $('#mode').text(thermostat.mode);
  }


})
