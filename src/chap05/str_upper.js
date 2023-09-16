let str1 = 'Wings';
let str2 = 'ｕｉｎｇｓ';

console.log(str1.toLowerCase());
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());

function capitalize(str) {
  return str.substring(0,1).toUpperCase() + str.substring(1).toLowerCase();
}

console.log(capitalize(str2));
