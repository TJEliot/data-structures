var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.start = 0;
  this.end = 0;
};

Queue.prototype.enqueue = function(item) {
  this[this.end] = item;
  this.end++;
};

Queue.prototype.dequeue = function() {
  if (this.end - this.start < 1) {
    return 0;
  }
  var holder = this[this.start];
  delete this[this.start];
  this.start++;
  return holder;
};

Queue.prototype.size = function() {
  return this.end - this.start;
};