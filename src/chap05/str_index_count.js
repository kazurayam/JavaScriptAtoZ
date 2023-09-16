let str = 'にわにはにわにわとりがいる';
let count = 0;
let key = 'にわ';
let pos = str.indexOf(key);

while (pos !== -1) {
  count++;
  pos = str.indexOf(key, pos + key.length);
}
console.assert(count === 3);
