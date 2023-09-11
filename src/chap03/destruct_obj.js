let book = {
  title : "Java Pocket Reference",
  publisher : "O'Reilly",
  price: 2680
};

let {title, price, memo = 'X'} = book;
console.log(title);
console.log(price);
console.log(memo);

