var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.counter = 0;
  storage.where = 0;
  storage.length = 0;
  storage.size = queueMethods.size;
  storage.enqueue = queueMethods.enqueue;
  storage.dequeue = queueMethods.dequeue;
  return storage;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.counter - this.where;
};

queueMethods.enqueue = function(myValue) {
  this[this.counter] = myValue;
  this.length++;
  this.counter++;
};

queueMethods.dequeue = function() {
  if (this.length === 0) {
    return 0;
  }
  var holder = this[this.where];
  delete this[this.where];
  this.where++;
  this.length--;
  return holder;
};
