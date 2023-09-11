let book = {
  title : "Java Pocket Reference",
  publisher : "O'Reilly",
  price: 2680,
  other: {
    keyword: "Java SE 18",
    logo: 'logo.jpg'
  }
};

let {title, other: {keyword}} = book;
console.log(keyword)
