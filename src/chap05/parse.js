let n = '123xxx';
console.assert(Number.isNaN(Number(n)));
console.assert(Number.parseFloat(n) === 123);
console.assert(Number.parseInt(n) === 123);

let d = new Date();
//console.log(Number(d));
console.assert(Number.isNaN(Number.parseFloat(d)));
console.assert(Number.isNaN(Number.parseInt(d)));

let h = '0x10';
//console.log(Number(h));
console.assert(Number.parseFloat(h) === 0);
console.assert(Number.parseInt(h) === 16);

let b = '0b11';
//console.log(Number(b));
console.assert(Number.parseFloat(b) === 0);
console.assert(Number.parseInt(b) === 0);

let e = '1.01e+2';
//console.log(Number(e));
console.assert(Number.parseFloat(e) === 101);
console.assert(Number.parseInt(e) === 1);
