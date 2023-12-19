let imgs = document.querySelectorAll("img");
let deprecateds = ['align', 'border', 'hspace', 'vspace', 'longdesc', 'name'];
for (let img of imgs) {
  for (let dep of deprecateds) {
    if (!img.hasAttribute(dep)) {
      img.removeAttribute(dep);
    }
  }
}