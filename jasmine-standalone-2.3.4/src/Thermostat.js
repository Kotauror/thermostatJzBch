function Thermostat(temperature = 20, mode = "save") {
  this.temperature = temperature;
  this.mode = mode;
};

Thermostat.prototype.changeMode = function() {
  this.mode = "normal";
}

Thermostat.prototype.increase = function(number) {
  this.temperature += number;
}

Thermostat.prototype.decrease = function(number) {
  if (this.temperature - number < 10) {
    this.temperature = 10;
  } else {
    this.temperature -= number;
  }
}
