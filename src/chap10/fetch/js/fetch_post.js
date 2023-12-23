let result = document.querySelector("#result");
document. querySelector("#myform").addEventListener('click', function(e) {
  let data = new FormData(document.querySelector("#myform"));
  fetch(`run-post`, {
    method: 'POST',
    body: data,
    })
    .then(res => res.text())
    .then(text => result.textContent = text);
}, false);