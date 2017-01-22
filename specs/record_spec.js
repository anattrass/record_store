var assert = require("assert");
var Record = require("../record");

describe("Record", function(){
  var record = new Record("Brand New", "Daisy", 11.00);

  it("Should have an artist", function(){
    assert.equal("Brand New", record.artist);
  });

  it("Should have a title", function(){
    assert.equal("Daisy", record.title);
  });

  it("Should have a price", function(){
    assert.equal(11.00, record.price);
  });
});