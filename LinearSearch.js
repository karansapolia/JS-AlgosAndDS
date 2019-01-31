var arr = [10,20,30,40,50,-90,-20,-100,0,1000];

function search(elem) {
    for(item of arr) {
        if(elem === item) {
            return [arr.indexOf(item), item];
        }
    }
    return null;
}

console.log(search(23));