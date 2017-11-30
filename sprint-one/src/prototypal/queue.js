var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(queueMethods);
  storage.counter = 0;
  storage.lowest = 0;
  storage.length = 0;
  return storage;
  
};

var queueMethods = {
  'enqueue': function(item) {
    this[this.counter] = item;
    this.length++;
    this.counter++;
  },
  'dequeue': function() {
    if (this.length > 0) {
      var holder = this[this.lowest];
      delete this[this.lowest];
      this.lowest++;
      this.length--;
      return holder;
    }
  },
  'size': function() {
    return this.length;
  }
};


