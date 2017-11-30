var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 // var storage = Object.create(Stack.prototype);
    var storage = Object.create(stackMethods);

  storage.counter = 0;
  return storage;
};


var stackMethods = {
  'push': function(item) {
  this[this.counter] = item;
  this.counter++;
},

'pop': function() {
  if (this.counter === 0){
    return 0;
  }
  var holder = this[this.counter-1];
  delete this[this.counter];
  this.counter--;
  return holder;
},

'size': function() {
  return this.counter;
  
  }  
 };



// Stack.prototype.push = function(item) {
//   this[this.counter] = item;
//   this.counter++;
// };

// Stack.prototype.pop = function() {
//   if (this.counter === 0){
//     return 0;
//   }
//   var holder = this[this.counter-1];
//   delete this[this.counter];
//   this.counter--;
//   return holder;
// };

// Stack.prototype.size = function() {
//   return this.counter;
// };
