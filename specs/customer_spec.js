var assert = require("assert");
var Customer = require("../customer");
var Store = require("../store");
var Record = require("../record");

describe("Customer", function(){
  var customer;
  var record;
  var store;

  beforeEach(function(){
    customer = new Customer("Lanky Kong", 56);
    record1 = new Record("Brand New", "Daisy", 11.00);
    record2 = new Record("Funeral for A Friend", "Hours", 12.00);
    store = new Store("Funky Kong Records", "DK Island", 100);
  });

  it("Should have a name", function(){
    assert.equal("Lanky Kong", customer.name);
  });

  it("Should have some money", function(){
    assert.equal(56, customer.money);
  });

  it("Should start with nothing in the collection", function(){
    assert.equal(0, customer.collectionCount());
  });

  it("Should add a record to the collection", function(){
    store.addRecord(record1);
    customer.buyRecord(store, "Daisy");
    assert.equal(1, customer.collectionCount());
  });

  it("Should reduce the customers money when a record is bought", function(){
    store.addRecord(record1);
    customer.buyRecord(store, "Daisy");
    assert.equal(45, customer.money);
  });

  it("Should have the purchased record in the collection", function(){
    store.addRecord(record1);
    customer.buyRecord(store, "Daisy");
    assert.deepEqual([record1], customer.listCollection());
  });

  it("Should be able to sell a record", function(){
    store.addRecord(record1);
    store.addRecord(record2);
    customer.buyRecord(store, "Daisy");
    customer.buyRecord(store, "Hours");
    customer.sellRecord("Daisy");
    assert.equal(1, customer.collectionCount());
    assert.equal(44, customer.money);
  });

});