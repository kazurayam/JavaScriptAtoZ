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

asyncProcess('徳次郎')
  .then(
    response => {
      console.log(response);
      return asyncProcess('任三郎');
    })
  .then(response => console.log(response))
  .catch(error => console.log(`error: ${error}`))
  .finally(() => console.log('finished'));
