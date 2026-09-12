const fs = require("fs");
let keywordsstr = fs.readFileSync("keywords.txt").toString();
let keywords = keywordsstr.split("\n").map((k) => k.trim().toLowerCase()); // 🚀 FIXED
module.exports = keywords;
