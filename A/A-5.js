let controllers = [
    {
        command: "plus",
        func: function sum(a,b){
            return a+b;
        }  
    },
    {
        command: "multiply",
        func: function multiply(a,b){
            return a*b;
        }
    },
    {
        command: "minus",
        func: function minus(a,b){
            return a-b;
        }
    }
]
let cmd = process.argv.slice(2)
for (let route of controllers) {
    if (route.command === cmd[0]) {
        console.log(route.func(parseInt(cmd[1]), parseInt(cmd[2])));
    }

}
