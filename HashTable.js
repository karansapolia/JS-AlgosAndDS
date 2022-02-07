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



// Practice 8th Feb, 2022
class HashTable {
    constructor() {
      this.table = new Array(50);
      this.size = 0;
    }
  
    _hash(key) {
      const string = new String(key)
      return [...string].reduce((prevVal, currVal, currIndex) => prevVal + string.charCodeAt(currIndex), 0) % this.table.length
    }
  
    set(key, value) {
      const index = this._hash(key);
      if (this.table[index]) {
        this.table[index] = { ...this.table[index], ...{ key: value } };
      } else {
        this.table[index] = { [key]: value };
      }
      ++this.size;
    }
  
    get(key) {
      const index = this._hash(key);
      if (this.table[index] && Object.keys(this.table[index]).length === 1) {
        return this.table[index];
      } else if (this.table[index] && Object.keys(this.table[index]).length >= 1) {
        return { [key]: this.table[index][key] };
      } else {
        return null;
      }
    }
  
    remove(key) {
      const index = this._hash(key)
      if (this.table[index]) {
        if (Object.keys(this.table[index]).length > 1) {
          delete this.table[index][key];
          --this.size;
          return true;
        } else {
          this.table[index] = undefined;
          --this.size;
          return true;
        }
      } else return false;
    }
  }
  
  const a = new HashTable();
  const b = a._hash(22)
  console.log(b)
  
  a.set('hello', 'karan');
  a.set('Canada', 300);
  a.set('Spain', 150);
  
  console.log(a)
  
  console.log(a.get('Canada'))
  console.log(a.get('hello'))
  
  a.remove('Spain')
  console.log(a)
  
  