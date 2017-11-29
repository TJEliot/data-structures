var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var length = 0;
  var lowest = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
    length++;
    console.dir(value + JSON.stringify(storage));
  };

  someInstance.dequeue = function() {
    var returner;
    if (length > 0){
      //returner = storage[0];
      returner = storage[lowest];
      length--;
      delete storage[lowest];
      lowest++;
      console.dir(JSON.stringify(storage));
    }
    return returner;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
