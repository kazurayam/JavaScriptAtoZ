let input = document.querySelector("#file");
input.addEventListener('change', function() {
  let files = input.files;
  for (let file of files) {
    console.log(`
      name: ${file.name}
      type: ${file.type}
      size: ${Math.round(file.size / 1024)}KB
      last modified: ${new Date(file.lastModified)}
    `);
  }
});