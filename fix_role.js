const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "main.js");
let content = fs.readFileSync(filePath, "utf8");

content = content.replace(/<span class="discussion-bubble-role discussion-bubble-role--\${m.role}">\${m.role === 'engineer' \? 'AI Engineer' : 'Domain Expert'}<\/span>/g, "");

fs.writeFileSync(filePath, content, "utf8");
console.log("Role fixed.");
