let result = document.querySelector("#result");
document. querySelector("#myform").addEventListener('click', function(e) {
  let params=new URLSearchParams();
  params.set('name', document.querySelector("#name").value);
  // console.log(`params: ${params.toString()}`);
  fetch(`run-query?${params.toString()}`)
    .then(res => res.text())
    .then(text => result.textContent = text);
}, false);