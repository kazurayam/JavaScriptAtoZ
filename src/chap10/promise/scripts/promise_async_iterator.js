// 非同期ジェネレータを定義
async function* getContents(...list) {
  for (let name of list) {
    let result = await fetch(name);
    yield result.json();
  }
}

// 指定されたファイルから順に署名(title)を取得しconsoleに出力する
async function main() {
  for await (let data of getContents('book1.json', 'book2.json', 'book3.json')) {
    console.log(data.title);
  }
}

main();
