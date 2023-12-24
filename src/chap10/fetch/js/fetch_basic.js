let btn = document.querySelector('#btn');
let result = document.querySelector('#result');
btn.addEventListener('click', function() {
    let book = fetchBook();
    result.textContent = book;
}, false);