var HashTable = function(size) {
  if (size === undefined) {
    size = 8;
  }
  this._limit = size;
  this._storage = LimitedArray(this._limit);
  this.counter = 0;
};

HashTable.prototype.insert = function(k, v) {
  this.counter++;
  var currentHash = this;
  var newHashMaker = function() {
    var newHash = new HashTable(currentHash['_limit'] * 2);
    var newFunc = newHash.insert(k, v);
    currentHash['_storage'].each( function() {
      var index = getIndexBelowMaxForKey(k, this['_limit']);
      var bucket = newHash['_storage'].get(index);
      if (newHash.retrieve(k)) {
        newHash.remove(k);
      }
      if (bucket === undefined) {
        bucket = [];
      }
      bucket.push([k, v]);
      newHash['_storage'].set(index, bucket);
    });
    returner = [];
    returner.push(newHash['_limit']);
    returner.push(newHash['_storage']);
    returner.push(newHash['counter']);
    return returner;
  };
  if (this['counter'] >= .75 * this['_limit']) {
    var holder = newHashMaker();
    this['_limit'] = holder[0];
    this['_storage'] = holder[1];
    //console.log('before we make it bigger counter is ' + this['counter']);
    this['counter'] = holder[2];
    //console.log('we made it bigger and now counter is ' + this['counter']);
  }    
  //below this actually does the adding
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this['_storage'].get(index);
  if (this.retrieve(k)) {
    this.remove(k);
  }
  if (bucket === undefined) {
    bucket = [];
  }
  bucket.push([k, v]);
  this['_storage'].set(index, bucket);
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
//  console.log(this['storage'].get(index));
  this['_storage'].get(index).pop();
  this.counter--;
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert: constant, except when doubling in size, in which case linear
 retrieve: constant
 remove: constant
 */


