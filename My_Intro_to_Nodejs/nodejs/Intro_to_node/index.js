const fs = require('fs');

fs.copyFileSync("file1.txt", "file2.txt");
const file = __filename;
console.log(file);  