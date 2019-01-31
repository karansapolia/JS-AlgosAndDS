function mySet() {
    var collection = [];

    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };

    this.values = function() {
        return collection;
    };

    this.add = function(element) {
        if(!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    };

    this.remove = function(element) {
        if(this.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    };

    this.size = function() {
        return collectino.length;
    };

    this.union = function(otherSet) {
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e) {
            unionSet.add(e); // note: the add() method defined in mySet already checks for duplicates
        });
        secondSet.forEach(function(e) {
            unionSet.add(e);
        });
        return unionSet;
    };

    this.intersection = function(otherSet) {
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e) {
            if(otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };

    this.difference = function(otherSet) {
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e) {
            if(!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };

    this.subset = function(otherSet) {
        var firstSet = this.values();
        return firstSet.every(function(value) {
            return otherSet.has(value);
        });
    };
}

var SetA = new mySet();
var SetB = new mySet();
SetA.add("a");
SetB.add("b");
SetB.add("c");
SetB.add("a");
SetB.add("d");
console.log(SetA.subset(SetB));
console.log(SetA.intersection(SetB).values());
console.log(SetB.difference(SetA).values());
console.log(SetB.values());
console.log(SetA.has("B"));

var SetC = new Set();
var SetD = new Set();
SetC.add("a");
SetD.add("b");
SetD.add("c");
SetD.add("a");
SetD.add("d");
console.log(SetD.values());
SetD.delete("a");
console.log(SetD.has("a"));
console.log(SetD.add("d"));