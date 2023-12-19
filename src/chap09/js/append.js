document .querySelector("#btn").addEventListener("click", function() {
  // create a <li> element
  let li = document.createElement('li');
  // create a <a> element
  let anchor = document.createElement('a');
  // modify the <a> element to have a href attribute and a content text
  let url = document.querySelector('#url');
  anchor.href = url.value;
  let title = document.querySelector('#title');
  anchor.textContent = title.value;
  // insert the <li> which contains the <a>
  li.append(anchor);
  let list = document.querySelector('#list');
  list.append(li);
}, false);