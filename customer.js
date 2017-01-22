var Customer = function(name, money){
  this.name = name;
  this.money = money;
  this.collection = [];
};

Customer.prototype = {
  collectionCount: function(){
    return this.collection.length;
  },

  buyRecord: function(record){
    this.money -= record.price;
    this.collection.push(record);
  }
};

module.exports = Customer;