let str = 'にわにはにわにわとりがいる';

console.assert(str.indexOf('にわ') === 0);
console.assert(str.lastIndexOf('にわ') === 6);
console.assert(str.indexOf('にど') === -1);
console.assert(str.indexOf('にわ', /* fromIndex */ 5) === 6);
