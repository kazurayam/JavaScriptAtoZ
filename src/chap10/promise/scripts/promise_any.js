function asyncProcess(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve(`input: ${value}`);
      } else {
        reject('empty input')
      }
    }, 500);
  });
}

Promise.any([
  asyncProcess(),
  asyncProcess(''),
  asyncProcess('凛々')
])
  .then(response => console.log(response))
  .catch(error => console.log(`エラー: $(error)`));
