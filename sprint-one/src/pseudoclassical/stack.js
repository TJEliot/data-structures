var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.counter = 0;
//  this.storage = {};
};


Stack.prototype.push = function(item) {
  this[this.counter] = item;
  this.counter++;
};
  
Stack.prototype.pop = function() {
  if (this.counter < 1) {
    return 0;
  }
  this.counter--;

  var holder = this[this.counter];
  delete this[this.counter];
  return holder; 
};
  
Stack.prototype.size = function() {
  return this.counter;  
};


// Stack.prototype = {
//   'push': function(item) {
//     this[this.counter] = item;
//     this.counter++;
//   },
//   'pop': function() {
//     if (this.counter < 1) {
//       return 0;
//     }
//     this.counter--;

//     var holder = this[this.counter];
//     delete this[this.counter];
//     return holder;
    
//   },
//   'size': function() {
//     return this.counter;  
//   }

