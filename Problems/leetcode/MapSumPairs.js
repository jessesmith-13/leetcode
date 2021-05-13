// Implement the MapSum class:

// MapSum() Initializes the MapSum object.
// void insert(String key, int val) Inserts the key-val pair into the map. If the key already existed, the original key-value pair will be overridden to the new one.
// int sum(string prefix) Returns the sum of all the pairs' value whose key starts with the prefix.

// Example 1:

// Input
// ["MapSum", "insert", "sum", "insert", "sum"]
// [[], ["apple", 3], ["ap"], ["app", 2], ["ap"]]
// Output
// [null, null, 3, null, 5]

// Explanation
// MapSum mapSum = new MapSum();
// mapSum.insert("apple", 3);  
// mapSum.sum("ap");           // return 3 (apple = 3)
// mapSum.insert("app", 2);    
// mapSum.sum("ap");           // return 5 (apple + app = 3 + 2 = 5)

var MapSum = function() {
  this.map = {};
};

MapSum.prototype.insert = function(key, val) {
  this.map[key] = val;
};

MapSum.prototype.sum = function(prefix) {
  let sum = 0;
  for (let word in this.map) {
    if (word.slice(0, prefix.length) === prefix) {
      sum += this.map[word];
    }
  }
  return sum;
};

let mapSum = new MapSum;
mapSum.insert("apple", 3);
console.log(mapSum.sum("ap"));
console.log(mapSum);