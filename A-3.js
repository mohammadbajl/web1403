let args = process.argv.slice(2)
let result = 1;

for (let i = 0; i < args.length; i++) {
    result *= parseInt(args[i]);
}

console.log(result);