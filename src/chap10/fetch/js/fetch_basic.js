let btn = document.querySelector('#btn');
btn.addEventListener('click', function() {
    let book = fetchBook();
    console.log(`book: ${book}`);
}, false);