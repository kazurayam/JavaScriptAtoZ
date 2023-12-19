let elem = document.querySelector('#elem');
elem.addEventListener('mouseover', function() {
  this.classList.add('highlight');
}, false);
elem.addEventListener('mouseout', function() {
  this.classList.remove('highlight');
}, false)