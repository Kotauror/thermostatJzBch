function Thermostat(temperature = 20, mode = "save") {
  this.temperature = temperature;
  this.mode = mode;
};

Thermostat.prototype.increase = function(number) {
  this.temperature += number;
}

Thermostat.prototype.decrease = function(number) {
  this.temperature -= number;
}
