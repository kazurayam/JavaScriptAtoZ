let btn = document.querySelector('#btn');
btn.addEventListener('click', function() {
  console.group('上位グループ');
  console.log("ログ");
  console.info("情報 %s", new Date().toLocaleDateString());
  console.warn("警告");
  console.error('エラー', 'だよん');
  for (let i = 0; i < 3; i++) {
    console.group('下位グループ');
    console.log("ログ");
    console.info("情報 %s", new Date().toLocaleDateString());
    console.warn("警告");
    console.error('エラー', 'だよん');
    console.groupEnd();
  }
  console.groupEnd();
}, false);