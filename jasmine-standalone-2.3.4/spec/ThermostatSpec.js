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

  it("temperature can not be more than 25 deg on save mode", function() {
    thermostat.increase(10);
    expect(thermostat.temperature).toEqual(25);
  })

  it("temperature can not be more than 32 deg on normal mode", function() {
    thermostat.changeMode();
    thermostat.increase(20);
    expect(thermostat.temperature).toEqual(32);
  })

  it("reset temperature to 20", function() {
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  })

  describe("usage", function() {
    it("tells the usage is medium", function() {
      expect(thermostat.usage()).toEqual("medium-usage");
    })
    it("tells the usage is low", function() {
      thermostat.decrease(3);
      expect(thermostat.usage()).toEqual("low-usage");
    })
    it("tells the usage is high", function() {
      thermostat.increase(6);
      expect(thermostat.usage()).toEqual("high-usage");
    })
  })



})
