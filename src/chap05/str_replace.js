let str = 'にわにはにわにわとりがいる';
console.assert(str.replace('にわ','二羽') === '二羽にはにわにわとりがいる');
console.assert(str.replaceAll('にわ','二羽') === '二羽には二羽二羽とりがいる');
