let btn = document .querySelector('#btn');
let listener = function() {
  console.log("Hello, world!");
};

btn.addEventListener('click', listener, false);
//btn.removeEventListener('click', listener, false);