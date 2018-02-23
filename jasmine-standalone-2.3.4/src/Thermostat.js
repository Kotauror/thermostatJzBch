'use strict';

function Thermostat(temperature = 20, mode = "saving power", currentMax = 25) {
  this.temperature = temperature;
  this.mode = mode;
  this.currentMax = currentMax;
};

Thermostat.prototype.changeMode = function() {
  if (this.mode === "normal") {
    this.mode = "saving power";
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

Thermostat.prototype.increaseByOne = function(){
  if(this.temperature + 1 < this.currentMax){
    this.temperature += 1;
  } else {
    this.maxTemperatureAlert();
  }
}

Thermostat.prototype.decrease = function(number) {
  if (this.temperature - number < 10) {
    this.temperature = 10;
  } else {
    this.temperature -= number;
  }
}

Thermostat.prototype.decreaseByOne = function(){
  if(this.temperature - 1 >= 10) {
    this.temperature -= 1;
  } else {
    this.minTemperatureAlert();
  }
}

Thermostat.prototype.reset = function() {
  this.temperature = 20;
}

Thermostat.prototype.usage = function() {
  if (this.temperature < 18) {
    return "low-usage";
  } else if (this.temperature > 25) {
    return "high-usage";
  } else {
    return "medium-usage";
  }
}

Thermostat.prototype.maxTemperatureAlert = function() {
  if(this.temperature === this.currentMax) {
    alert("Maximum temperature reached")
  }
}

Thermostat.prototype.minTemperatureAlert = function() {
  if(this.temperature === 10) {
    alert("Minimum temperature reached")
  }
}
