let storage = new MyStorage('JSSample');

let btn = document.querySelector('#btn');
btn.addEventListener('click', function() {
  storage.setItem('hoge', 'ホゲ');
  storage.save()
  console.log(storage.getItem('hoge'));
}, false);