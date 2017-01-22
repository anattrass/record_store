var Store = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = [];
};

Store.prototype = {
  stockCheck: function(){
    return this.inventory.length;
  },

  addRecord: function(record){
    this.inventory.push(record);
  },

  listInventory: function(){
    return this.inventory;
  },

  sellRecord: function(recordTitle) {

   var chosenRecord = this.inventory.find(function(record) {
     return record.title === recordTitle;
   });

   var index = this.inventory.indexOf(chosenRecord);

   this.inventory.splice(index, 1);
   this.balance += chosenRecord.price;

   return chosenRecord;
 },

  financialReport: function(){
    var stockPrice = this.inventory.reduce(function(accum, record){
      return accum + record.price;
    }, 0);
    return  stockPrice + this.balance;
  }
};

module.exports = Store;