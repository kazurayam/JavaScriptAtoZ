// js/fetch_upload.js

let result = document.querySelector('#result');
let upfile = document.querySelector('#upfile');

// 人がファイルを選んだら、ただちにファイルをサーバへアップロードする
upfile.addEventListener('change', function() {
    // formデータを生成して
    let f = upfile.files[0];
    let data = new FormData();
    data.append('upfile', f, f.name);
    console.log(`${f.name}`);
    // ファイルを送信する
    fetch('fetch_upload', {
        method: 'POST',
        body: data,
        })
        .then(res => res.text())
        // サーバから応答されたテキストをブラウザ画面に表示
        .then(text => result.textContent = text);
}, false);