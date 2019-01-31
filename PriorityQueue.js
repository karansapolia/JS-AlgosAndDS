function PriorityQueue() {
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    this.enqueue = function(element) {
        if(this.isEmpty()) {
            collection.push(element);
        } else {
            var added = false;
            for(var i = 0; i < collection.length; i++) {
                if(element[1] < collection[i][1]) {
                    collection.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            if(!added) {
                collection.push(element);
            }
        }
    };
    this.dequeue = function() {
        var value = collection.shift();
        return value[0];
    };
    this.front = function() {
        return collection[0];
    };
    this.size = function() {
        return collection.length;
    };
    this.isEmpty = function() {
        return (collection.length === 0);
    };
}

var pq = new PriorityQueue();
pq.enqueue(['Karan Sapolia', 1]);
pq.enqueue(['Arjun Dixit', 1]);
pq.enqueue(['Sajal Gandhi', 3]);
pq.enqueue(['Ravi Shastri', 2]);
pq.enqueue(['Abhas Kumar', 2]);
pq.print();
console.log(pq.dequeue());
pq.print();
console.log(pq.front());
console.log(pq.size());
console.log(pq.isEmpty());
