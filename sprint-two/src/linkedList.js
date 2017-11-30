var LinkedList = function() {
  var list = {};
  var counter = 0;
  var front = 0;
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    list['node' + counter] = new Node(value);
    this.tail = list['node' + counter];  
    if (this.head === null) {
      this.head = list['node' + counter];
    }
    counter++;
  };

  list.removeHead = function() {
    if (this.head !== null) {
      var holder = this.head;
      delete this.head;
      delete list['node' + front];
      front++;
      this.head = list['node' + front];
      return holder.value;
    }
  };

  list.contains = function(target) {
    for (var key in list) {
      if (list[key].value === target) {
        return true;
      }
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
