// const fs = require("fs");
// fs.readFile("./cool.txt", "utf-8", function (err, content) {
//   console.log(content);
// });

// fs.writeFile("./awsome.txt", "Good Day", function (err) {
//   console.log("compled writing");
// });

// const htmlData = "Good Morning";

// for (let i = 1; i <= 10; i++) {
//   fs.writeFile(`./backups/text-${i}.txt`, htmlData, function (err) {
//     console.log("Completed writing", i);
//   });
//}

fs.readdir("./backups", function (err, files) {
  console.log(files);
});
