function Thermostat(temperature = 20, mode = "save") {
  this.temperature = temperature;
  this.mode = mode;
};

Thermostat.prototype.changeMode = function() {
  this.mode = "normal";
}

Thermostat.prototype.increase = function(number) {
  if (this.mode === 'save') {
    if (this.temperature + number > 25) {
      this.temperature = 25;
    } else {
      this.temperature += number;
    }
  } else {
    if (this.temperature + number > 32) {
      this.temperature = 32;
    } else {
      this.temperature += number;
    }
  }
}

Thermostat.prototype.decrease = function(number) {
  if (this.temperature - number < 10) {
    this.temperature = 10;
  } else {
    this.temperature -= number;
  }
}
thermostat
