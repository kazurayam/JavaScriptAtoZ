let num = 1234.567;
let fmt = new Intl.NumberFormat('ja-JP', {
  style : 'currency',
  currency: 'JPY',
  currencyDisplay: 'symbol',
});
console.log(fmt.format(num));
console.assert(fmt.format(num) === '￥1,235')
