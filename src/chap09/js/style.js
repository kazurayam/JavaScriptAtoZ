let elem = document.querySelector('#elem');
elem.addEventListener('mouseover', function() {
  this.style.color = 'red';
}, false);
elem.addEventListener('mouseout', function() {
  this.style.color = 'black';
}, false);