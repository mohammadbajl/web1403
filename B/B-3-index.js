let cmd = require("./B-3-cmd.js")

cmd.use("minus", function(a, b){
    return a - b
});
cmd.use("sum", function(a, b){
    return a + b
});
cmd.use("multiply", function(a, b){
    return a * b
});

cmd.use("divide", function(a, b){
    return a / b
});
cmd.main()