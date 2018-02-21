describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  it("it has temperature var that defaults to 20 deg.", function() {
    expect(thermostat.temperature).toEqual(20);
  })

  it("it has a mode var that defaults to save", function() {
    expect(thermostat.mode).toEqual("save");
  })

  it("it can change a mode", function() {
    thermostat.changeMode();
    expect(thermostat.mode).toEqual("normal");
  })

  it("it can increase temperature", function() {
    thermostat.increase(5);
    expect(thermostat.temperature).toEqual(25);
  })

  it("it can decrease temperature", function() {
    thermostat.decrease(5);
    expect(thermostat.temperature).toEqual(15);
  })

  it("temperature cannot be less than 10 deg", function() {
    thermostat.decrease(15);
    expect(thermostat.temperature).toEqual(10);
  })

})
