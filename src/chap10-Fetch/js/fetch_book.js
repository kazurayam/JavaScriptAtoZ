let fetchBook = function() {
  fetch('https://raw.githubusercontent.com/kazurayam/JavaScriptAtoZ/master/src/chap10-Fetch/book.json')
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    throw new Error('unable to access the specified resource');
  })
  .then(data => console.log(data.title))
  .catch(e => window.alert(e.message));
}