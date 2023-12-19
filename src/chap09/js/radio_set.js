function setRadioValue(name, val) {
  let inputs = document.querySelectorAll(`input[name="${name}"]`);
  for (let input of inputs) {
    if (input.value === val) {
      input.checked = true;
      break;
    }
  }
}