let books = [
  { title: 'TypeScript入門', price: 2948, publisher: '技術評論社' },
  { title: 'Bootstrap 5の教科書', price: 3828, publisher: '技術評論社' },
  { title: 'C#の教科書', price: 3190, publisher: '日経BP' }
];
let btn = document.querySelector('#btn');
btn.addEventListener('click', function() {
  console.table(books, ['title','price']);
}, false);