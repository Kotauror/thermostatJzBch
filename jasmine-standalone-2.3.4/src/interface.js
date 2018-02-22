$( document ).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  updateMode();

  $('#number').text(thermostat.temperature);

  $('#mode').text(thermostat.mode);

  $('#usageinfo').text(thermostat.usage());

  $('#switch_button').click(function() {
  thermostat.changeMode();
  updateMode();
  });

  $('#reset_button').click(function() {
  thermostat.reset();
  });

  $('#increase_form').submit(function() {
    var input = $("input").val();
    console.log(input);
    thermostat.increase(input);
    $('#number').text(thermostat.temperature);
  });

  $( "#target" ).submit(function( event ) {
    alert( "Handler for .submit() called." );
    event.preventDefault();
  });


  function updateTemperature() {
    $('#number').text(thermostat.temperature);
    $('#usage_color').attr('class', thermostat.usage());
  }

  function updateMode() {
    $('#mode').text(thermostat.mode);
  }


})
