var BinarySearchTree = function(ourNum, where) {
  var ourTree = Object.create(BinarySearchTree.prototype);
  ourTree.value = ourNum;
  ourTree.left = undefined;
  ourTree.right = undefined;
  if (where === undefined) {
    where = [];
  }
  ourTree.where = where;
  return ourTree;
};

BinarySearchTree.prototype.insert = function(item, fromWhere) {
  if (item < this['value']) {
    if (this['left'] === undefined) {
      this['left'] = BinarySearchTree(item, this['where'].push(1));
    } else {
      this['left'].insert(item);
    }
  } else {
    if (this['right'] === undefined) {
      this['right'] = BinarySearchTree(item);
    } else {
      this['right'].insert(item, this['where'].push(0));
    }
  }
};

BinarySearchTree.prototype.contains = function(item) {
  if (this['value'] === item) {
    return true;
  } else if (this['value'] > item) {
    if (this['left'] === undefined) {
      return false;
    }
    return this['left'].contains(item);
  } else if (this['value'] < item) {
    if (this['left'] === undefined) {
      return false;
    }
    return this['right'].contains(item);
  }
};

BinarySearchTree.prototype.depthFirstLog = function(callBack) { 
  var recurse = function(currentNode) {
    callBack(currentNode['value']);
    if (currentNode['left'] !== undefined) {
      recurse(currentNode['left']);
    }
    if (currentNode['right'] !== undefined) {
      recurse(currentNode['right']);
    }
  };
  recurse(this);
};
  

/*
 * Complexity: What is the time complexity of the above functions?
 */
