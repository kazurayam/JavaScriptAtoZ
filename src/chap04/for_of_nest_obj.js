let data = [
  {
    isbn: '978-4-297-12635-3',
    title: 'ゼロからわかるTypeScript入門',
    publisher: '技術評論社'
  },
  {
    isbn: '978-4-8156-1336-5',
    title: 'これから始めるVue.js 3実践入門',
    publisher: 'SBクリエイティブ',
  },
  {
    isbn: '978-4-2971-2490-8',
    title: 'Bootstrap 5 フロントエンド開発の教科書',
    publisher: '技術評論社'
  }
];

for ({isbn, title, publisher} of data) {
  console.log(`${title} (${publisher}) ${isbn}`);
}
