const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "main.js");
let content = fs.readFileSync(filePath, "utf8");

content = content.replace(/â†’/g, "→");
content = content.replace(/âœ“/g, "✓");

fs.writeFileSync(filePath, content, "utf8");
console.log("Characters fixed part 2.");
