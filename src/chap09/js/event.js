let btn = document .querySelector('#btn');
let listener = function(e) {
  let target = e.target;
  console.log(`target: ${target.nodeName} / ${target.id}`);
  console.log(`event type: ${e.type}`)
};

btn.addEventListener('click', listener, false);
