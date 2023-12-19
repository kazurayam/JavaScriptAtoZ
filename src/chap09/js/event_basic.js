let pic = document.querySelector("#cover");
pic.addEventListener('mouseover', function() {
  this.src = 'images/wings.jpg';
});
pic.addEventListener('mouseleave', function() {
  this.src = 'images/wings_mini.jpg';
});
