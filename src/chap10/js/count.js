let btn = document.querySelector('#btn');
btn.addEventListener('click', function() {
  for (let i = 0; i < 3; i++) {
    for(let j = 0; j < 3;j++) {
      console.count('LOOP');
    }
  }
  console.count('LOOP');
}, false);