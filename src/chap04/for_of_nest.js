let data = [
  ['ゼロからわかるTypeScript入門', '技術評論社'],
  ['これから始めるVue.js 3実践入門', 'SBクリエイティブ'],
  ['Bootstrap 5 フロントエンド開発の教科書', '技術評論社']
];

for (let [title, publisher] of data) {
  console.log(`${title} (${publisher})`);
}
