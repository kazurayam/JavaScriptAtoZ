function getRadioValue(name) {
  let result = [];
  let inputs = document.querySelectorAll(`input[name="${name}"]`);
  for (let input of inputs) {
    if (input.checked) {
      result.push(input.value);
      break;
    }
  }
  return result;
}
document.querySelector('#btn').addEventListener("click", function() {
  console.log(getRadioValue('food'));
});