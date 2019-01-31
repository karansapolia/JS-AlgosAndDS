var input = -22;
var arr = [-99,10000,0,-22,-35,75,49,999];

function binarySearch(value) {
    var array = arr.sort((a,b) => a-b);
    console.log("sorted array is: ", array);
    var low = 0, high = array.length-1;
    var mid = Math.floor((low+high)/2); 
    var goal = 0;
    if(value > array[array.length-1] || value < array[0]) {
        return "NOT FOUND";
    }
    while(low != high) {
        mid = Math.floor((low+high)/2); 
        console.log('Low: '+low+' High: '+high+'\n');
        if(array[mid] === value) {
            return [true, mid];
        }
        else if(array[mid] < value) {
            low = mid+1;
            console.log('Low: '+low+' High: '+high+'\n');
        }
        else if(array[mid] > value) {
            high = high - 1;
            console.log('Low: '+low+' High: '+high+'\n');
        }
    }
    return "NOT FOUND";
}

console.log(binarySearch(input));