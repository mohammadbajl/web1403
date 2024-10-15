let args = process.argv.slice(2)
function sum(first, sec) {
    return parseInt(first) + parseInt(sec);
}
function multiply(first, sec) {
    return parseInt(first) * parseInt(sec);
}

switch (args[0])
{
    case "sum":
        console.log(sum(args[1], args[2]));
        break;
    case "multiply":
        console.log(multiply(args[1], args[2]));
        break;
}