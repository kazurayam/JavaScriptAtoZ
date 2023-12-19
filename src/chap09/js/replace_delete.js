let anchors = document .querySelectorAll('#list a');
let pic = document .querySelector('#pic');
let del = document .querySelector('#del');

for (let anchor of anchors) {
  anchor.addEventListener('click', function(e) {
    // pick up the ISBN value out of the data-isbn attr
    let isbn = this.getAttribute('data-isbn');
    if (isbn) {
      // create a <img> element
      let img = document.createElement('img');
      img.src = `https://wings.msn.to/books/${isbn}/${isbn}.jpg`;
      img.alt = e.textContent;
      img.width = 108;
      img.height = 150;
      if (pic.querySelector('img')) {
        pic.replaceChild(img, pic.lastChild);
      } else {
        pic.append(img);
        del.disabled = false;
      }
    }
  }, false);
}

del.addEventListener('click', function() {
  pic.removeChild(pic.lastChild);
  del.disabled = true;
}, false);