const readline = require('node:readline').createInterface({ input: process.stdin, output: process.stdout, });
let base = require("./B-4-cmd.js");

let name = readline.question("name: ");
let family_name = readline.question("fname: ");

base.create_record(name, family_name);
base.start();