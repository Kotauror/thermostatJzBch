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

  it("it can increase temperature", function() {
    thermostat.increase(5);
    expect(thermostat.temperature).toEqual(25);
  })

  it("it can decrease temperature", function() {
    thermostat.decrease(5);
    expect(thermostat.temperature).toEqual(15);
  })

})
