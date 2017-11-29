var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.counter = 0;
  
  
  
  // storage.push = stackMethods.push;
  // storage.pop = stackMethods.pop;
  // storage.size = Stack.stackMethods.size;
 // _.extend(storage, stackMethods);
//  extend(storage, stackMethods)
  storage.size = stackMethods.size;
  storage.push = stackMethods.push;
  storage.pop = stackMethods.pop;
  return storage;

};

var stackMethods = {};

stackMethods.size = function(size) {  
  return this.counter;
};

stackMethods.push = function(myVal) {
  this[this.counter] = myVal;
  this.counter = this.counter + 1;
};

stackMethods.pop = function() {
  if (this.counter > 0) {
    this.counter--;
    var holder = this[this.counter];
    delete this[this.counter];
    return holder;
  }
};


// var stackMethods = {
//   'push': function(x) {
//     counter++;
//   },
//   'pop': function() {
//     counter--;
//   },
//   'size': function() {
//     return Stack.counter;
//   }
// };


var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
};