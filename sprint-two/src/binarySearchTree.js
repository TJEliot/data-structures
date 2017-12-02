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

BinarySearchTree.prototype.depthFirstLog = function(func, node, whereWeBeen) {
  if (node === undefined) {
    node = this;
//    node['value'] = this['value'];
  }
  if (whereWeBeen === undefined) {
    whereWeBeen = [];
  }
  whereWeBeen.push(node['where']);
  func(node['value']);
  if (node['left'] !== undefined && !whereWeBeen.includes(node['left']['where'])) {
    node['left'].depthFirstLog(func, node['left'], whereWeBeen);
    console.log('left');
  } else if (node['right'] !== undefined && !whereWeBeen.includes(node['right']['where'])) {
    //alert(node['right']['value']);
    node['right'].depthFirstLog(func, node['right'], whereWeBeen);
        console.log('right');

   } else if (node['where'].length === 0 && whereWeBeen.includes(node['left']['where']) && whereWeBeen.includes(node['right']['where'])) {
        console.log('top!');

    return true;
   } else {
   
   //if (node['where'].length !== 0) {
    alert('heading up');
//    var parent = node['where']//slice(0, -1);
    parent.depthFirstLog(func, undefined, whereWeBeen);
//    root.left.left.right.left.depthFirstLog();
    var arrayString = this['where'].slice(0, -1).join('.');
    var parent = eval('root' + '.' + arrayString);
    parent.depthFirstLog(func, parent, whereWeBeen);
  }
//  }
  // var crawl = function(node){
  //   var beenThere = [];
  //   if (node['left'] !== undefined && !beenThere.includes(node['left']['where'])) {
  //     crawl(node['left']);
  //   }
  
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
