'use strict';

function Thermostat(temperature = 20, mode = "save", currentMax = 25) {
  this.temperature = temperature;
  this.mode = mode;
  this.currentMax = currentMax;
};

Thermostat.prototype.changeMode = function() {
  if (this.mode === "normal") {
    this.mode = "save";
    this.currentMax = 25;
  } else {
    this.mode = "normal";
    this.currentMax = 32;
  }
}

Thermostat.prototype.increase = function(number) {
  if (this.temperature + number > this.currentMax) {
    this.temperature = this.currentMax;
  } else {
    this.temperature += number;
  }
}

Thermostat.prototype.decrease = function(number) {
  if (this.temperature - number < 10) {
    this.temperature = 10;
  } else {
    this.temperature -= number;
  }
}

Thermostat.prototype.reset = function() {
  this.temperature = 20;
}

Thermostat.prototype.usage = function() {
  if (this.temperature < 18) {
    return "low-usage";
  } else if (this.temperature < 25) {
    return "medium-usage";
  } else {
    return "high-usage";
  }
}
