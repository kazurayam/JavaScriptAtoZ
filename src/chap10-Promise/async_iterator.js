async function* getContents(...list) {
  for (let name of list) {
    let result = await fetch(name);
    yield result.json();
  }
}

async function main() {
  for await (let data of getContents('book1.json', 'book2.json', 'book3.json')) {
    console.log(data.title);
  }
}

console.log(`Current Working Directory is ${process.cwd()}`)

main();