var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.counter = 0;
};

HashTable.prototype.insert = function(k, v, update) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this['_storage'].get(index);
  if (this.retrieve(k)) {
    this.remove(k);
    this.counter--;
  }
  if (bucket === undefined) {
    bucket = [];
  }
  bucket.push([k, v]);
  this['_storage'].set(index, bucket);
  if (this['counter'] >= .75 * this['_limit']) {
    this.resize(2);
  }
  if (update !== true) {
    this.counter++;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this['_storage'].get(index);
  if (bucket === undefined) {
    return false;
  }
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) { 
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this['_storage'].get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] == k) {
        bucket.splice(i, 1);
        this.counter--;
      }
    }
  }
  if (this['counter'] <= .75 * this['_limit'] && this['_limit'] > 8) {
    this.resize(.5);
  } 
};

HashTable.prototype.resize = function(factor) {
  var temporaryStorage = [];
  for (var i = 0; i < this['_limit']; i++) {
    var bucket = this['_storage'].get(i);
    if (bucket) {
      bucket.forEach( function(tuple) {
        temporaryStorage.push(tuple);
      });
    }
  }
  this['_limit'] *= factor;
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < temporaryStorage.length - 1; i++) {
    this.insert(temporaryStorage[i][0], temporaryStorage[i][1], true);
  }
};

 
 
  




/*
 * Complexity: What is the time complexity of the above functions?
 insert: constant
 retrieve: constant
 remove: constant
 resize: linear
 */


