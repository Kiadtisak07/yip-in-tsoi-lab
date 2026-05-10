
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "main.js");
let content = fs.readFileSync(filePath, "utf8");

content = content.replace(/â€”/g, "—");
content = content.replace(/à¸—à¸”à¸¥à¸­à¸‡à¹ƒà¸Šà¹‰/g, "ทดลองใช้");
content = content.replace(/ðŸ¤–/g, "🤖");
content = content.replace(/ðŸ”/g, "🔎"); // Wait, what was the icon? 

fs.writeFileSync(filePath, content, "utf8");
console.log("Characters fixed.");

