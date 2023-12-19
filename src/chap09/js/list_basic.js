function getSelectValue(name) {
  let result = [];
  let options = document.querySelector(name).options;
  for (let opt of options) {
    if (opt.selected) {
      result.push(opt.value)
    }
  }
  return result;
}
document.querySelector('#btn').addEventListener("click", function() {
   console.log(getSelectValue('#food'));
}, false);