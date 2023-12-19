let count = 0;
let result = document.querySelector('#result');

document .querySelector('#btn').addEventListener('click', function() {
  result.textContent = ++count;
  history.pushState(count, '', `/js/chap10/count/${count}`);
}, false);

window.addEventListener('popstate', function(e) {
  count = e.state ;
  result.textContent = count;
});
