var hash = (string, max) => {
    var hash = 0;
    for(var i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }
    return hash % max;
};

let HashTable = funtion() {
    let storage = [];
    const storageLimit = 4;

    this.print = function() {
        console.log(storage)
    }
}