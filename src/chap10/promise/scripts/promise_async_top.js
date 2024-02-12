function asyncProcess(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof value === 'number') {
        resolve(value ** 2);
      } else {
        reject('value needs to be a number')
      }
    }, 500);
  });
}

let result1 = await asyncProcess(2);
let result2 = await asyncProcess(result1);
let result3 = await asyncProcess(result2);
console.log(result3);
document.querySelector("#content").innerHTML = result3;
