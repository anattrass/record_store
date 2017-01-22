var Customer = function(name, money){
  this.name = name;
  this.money = money;
  this.collection = [];
};

Customer.prototype = {
  collectionCount: function(){
    return this.collection.length;
  },

  listCollection: function(){
    return this.collection;
  },

  buyRecord: function(store, recordTitle) {
    var record = store.sellRecord(recordTitle);
    this.money -= record.price;
    this.collection.push(record);
  },

  sellRecord: function(recordTitle) {

    var chosenRecord = this.collection.find(function(record) {
      return record.title === recordTitle;
    });

    var index = this.collection.indexOf(chosenRecord);

    this.collection.splice(index, 1);
    this.money += chosenRecord.price;

    return chosenRecord;
  }
};

module.exports = Customer;