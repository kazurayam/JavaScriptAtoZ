document .querySelector("#inner").addEventListener('click', function(e) {
  window.alert('#innerリスナーが発火しました');
  e.stopPropagation();
  e.stopImmediatePropagation();
  e.preventDefault();
}, false);
document .querySelector("#outer").addEventListener('click', function(e) {
  window.alert('#outerリスナーが発火しました');
}, false);
document .querySelector("#inner").addEventListener('click', function(e) {
  window.alert('#inner2リスナーが発火しました');
}, false);
