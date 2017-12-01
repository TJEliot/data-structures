var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this['_storage'][item] = item;
  console.log(JSON.stringify(this['_storage']));
};

setPrototype.contains = function(item) {
  if (this['_storage'][item] === item) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  delete this['_storage'][item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 add is constant
 contains is constant
 remove is constant
 */
