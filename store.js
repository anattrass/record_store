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

  sellRecord: function(record){
    this.balance += record.price;
  },

  financialReport: function(){
    var stockPrice = this.inventory.reduce(function(accum, record){
      return accum + record.price;
    }, 0);
      return  stockPrice + this.balance;
  }
};

module.exports = Store;