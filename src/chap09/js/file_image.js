let reader = new FileReader();
reader.addEventListener("load", function() {
  document.querySelector("#result").src = reader.result;
}, false);
reader.addEventListener("error", function(){
  console.log(reader.error.message);
});
file.addEventListener("change", function() {
  let file = document.querySelector("#file");
  reader.readAsDataURL(file.files[0]);
});