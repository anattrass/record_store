var assert = require("assert");
var Store = require("../store");
var Record = require("../record");

describe("Store", function(){
  var store;
  var record1;
  var record2;

  beforeEach(function() {
    store = new Store("Funky Kong Records", "DK Island", 100);
    record1 = new Record("Brand New", "Daisy", 11.00);
    record2 = new Record("Funeral for A Friend", "Hours", 12.00);
  });

  it("Should have a name", function(){
    assert.equal("Funky Kong Records", store.name);
  });

  it("Should have a city", function(){
    assert.equal("DK Island", store.city);
  });

  it("Should have a balance", function(){
    assert.equal(100, store.balance);
  });

  it("Should start with an empty inventory", function(){
    assert.equal(0, store.stockCheck());
  });

  it("Should have added a record", function(){
    store.addRecord(record1);
    store.addRecord(record1);
    assert.equal(2, store.stockCheck());
  });

  it("Should list the inventory", function(){
    store.addRecord(record1);
    store.addRecord(record2);
    assert.deepEqual([record1, record2], store.listInventory());
  });

  it("Should increase the balance by the price of the sold record", function(){
    store.addRecord(record1);
    store.addRecord(record2);
    store.sellRecord(record1);
    assert.equal(111, store.balance);
  });

  it("should return the financial state of the store", function(){
    store.addRecord(record1);
    store.addRecord(record2);
    store.addRecord(record2);
    store.addRecord(record2);
    assert.equal(147, store.financialReport());
  });

});