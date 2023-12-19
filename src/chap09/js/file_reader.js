let reader = new FileReader();
reader.addEventListener("load", function() {
  document.querySelector("#result").textContent = reader.result;
}, false);
reader.addEventListener("error", function(){
  console.log(reader.error.message);
});
document.querySelector("#btn").addEventListener("click", function() {
  let file = document.querySelector("#file");
  reader.readAsText(file.files[0], 'UTF-8')
});