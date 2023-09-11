
let book = {
  title : "Java Pocket Reference",
  publisher : "O'Reilly",
  price: 2680,
};

let {title, ...rest} = book;
console.log(rest)
