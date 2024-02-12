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

Promise.all([
  asyncProcess('篤二郎'),
  asyncProcess('任三郎'),
  asyncProcess('凛々')
])
  .then(response => console.log(response))
  .catch(error => console.log(`エラー: $(error)`));
