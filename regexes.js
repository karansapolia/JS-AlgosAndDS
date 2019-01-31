var str1 = '+91-920730740'; 
var re1 = /^([+-]?\d{1,2}[ -\B])?(\()?(\d{3})(\))?[- ]?(\d{1,4})[- ]?(\d{1,4})[- ]?(\d{1,4})$/ig;

//console.log(re1.test(str1));

var matches = re1.exec(str1);
console.log(matches);

var str2 = 'hello hello big long buffalo\n wassup brexy ass';
var re2= /( \w+)+ \w+\b/mig;
var output = str2.match(re2);

console.log(output);
console.log(output[2]);