var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var lowest = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    var returner;
    if (counter > 0){
      returner = storage[0];
      counter--;
      delete storage[0];
    }
    return returner;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
