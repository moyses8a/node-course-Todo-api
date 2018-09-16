const {SHA256} = require('crypto-js');

var m = 'I am user number 3';

var hash = SHA256(m).toString();

console.log('Message ->',m);
console.log('Hash    ->',hash);



