let str = '123.45';
// string.padStartは役に立つ
console.assert(str.padStart(10) === '    123.45');
console.assert(str.padStart(10, '0') === '0000123.45');
console.assert(str.padEnd(10, '0') === '123.450000');
console.assert(str.padStart(10, 'xyz') === 'xyzx123.45');
console.assert(str.padStart(10, 'abcdef') === 'abcd123.45');
console.assert(str.padStart(3) === '123.45');
