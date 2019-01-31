var str = "this is the input string";

function reverse(str) {
    return str.split('').reduce((rev, char) => char+ rev, '');
}

function revr(str) {
    return str.split('').reverse().join('');
}

function normalReverse(str) {
    let reversed = '';
    for(var i = str.length - 1; i  >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverse(str));
console.log(revr(str));
console.log(normalReverse(str));


