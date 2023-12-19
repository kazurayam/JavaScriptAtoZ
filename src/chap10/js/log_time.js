document .querySelector('#btn').addEventListener('click', function() {
  console.time('MyTimer');
  window.alert('Please accept');
  console.timeEnd('MyTimer');
}, false);