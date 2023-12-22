let btn = document.querySelector('#btn');
btn.addEventListener('click', function() {
  console.log("ログ");
  console.info("情報 %s", new Date().toLocaleDateString());
  console.warn("警告");
  console.error('エラー', 'だよん');
}, false);