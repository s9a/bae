const fs = require("fs")
let pkg = fs.readFileSync("./package.json", "utf8")
pkg = JSON.parse(pkg)
console.log(pkg)
