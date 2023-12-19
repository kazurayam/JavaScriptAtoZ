function call1() {
  call2();
}
function call2() {
  call3();
}
function call3() {
  console.trace();
}
let btn = document .querySelector('#btn');
btn.addEventListener('click', function() {
  call1();
}, false);
