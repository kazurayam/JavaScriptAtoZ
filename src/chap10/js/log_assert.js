function circle(radius) {
  console.assert(typeof radius === 'number' && radius > 0, 'radius must be a positive number');
  return radius ** 2 * Math.PI;
}
let btn = document.querySelector('#btn');
btn.addEventListener('click', function() {
  circle(-5);
}, false);

