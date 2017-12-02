var BinarySearchTree = function(ourNum) {
  var ourTree = Object.create(BinarySearchTree.prototype);
  ourTree.value = ourNum;
  ourTree.left = undefined;
  ourTree.right = undefined;
  return ourTree;
};

BinarySearchTree.prototype.insert = function(item) {
  if (item < this['value']) {
    if (this['left'] === undefined) {
      this['left'] = BinarySearchTree(item);
    } else {
      this['left'].insert(item);
    }
  } else {
    if (this['right'] === undefined) {
      this['right'] = BinarySearchTree(item);
    } else {
      this['right'].insert(item);
    }
  }
};

BinarySearchTree.prototype.contains = function(item) {
  if (this['value'] === item) {
    return true;
  } else if (this['value'] > item) {
    return this['left'].contains(item);
  } else if (this['value'] < item) {
    return this['right'].contains(item);
  }
};

BinarySearchTree.prototype.depthFirstLog = function() {
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
