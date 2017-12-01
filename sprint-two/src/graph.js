// Instantiate a new graph
var Graph = function() {
  //var counter = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //this["" + node] = {"value" : node};
  this[node] = {
    "value" : node,
    "edges" : []
  }
//  console.log("counter is " + this.counter);
  // console.log("the node's name is " + this[this.counter]);
  // this[this.counter].value = node;
  // this[this.counter].edges = {};
//  this.counter++;
};

// Return a boolean value indicating if the value passed to contains 
//is represented in the graph.
Graph.prototype.contains = function(node) {
  for (key in this){
    if (this[key].value === node){
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (key in this){
    if (this[key].value === node){
      delete this[key];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  
//Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this[fromNode] === undefined || this[toNode] === undefined){
    return false;
  }
  if (this[fromNode]["edges"].includes(toNode)){
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode]["edges"].push(toNode);
  //console.log(JSON.stringify(this));
  this[toNode]["edges"].push(fromNode);  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this[fromNode]["edges"] = this[fromNode]["edges"].filter(node => node.value === toNode);
  this[toNode]["edges"] = this[toNode]["edges"].filter(node => node.value === toNode);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (key in this){
    if (this[key].hasOwnProperty("value")){
      cb(key);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


