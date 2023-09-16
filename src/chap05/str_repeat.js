let str = 'ハム';

console.assert(str.repeat(5) === 'ハムハムハムハムハム');
console.assert(str.repeat(0) === '');
console.assert(str.repeat(3.5) === 'ハムハムハム');

try {
  let s = str.repeat(-5);
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
}
