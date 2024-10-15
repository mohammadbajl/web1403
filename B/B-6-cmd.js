let controllers = [];

function use(name, func){
    let x = {
        command: name,
        function: func
    };

    controllers.push(x);
}

module.exports = {
    use: use,
    main: main,
}

function main() {
    let found = false;
    let inputs = process.argv.slice(2)
    let command = inputs[0]
    for(let item of controllers){
        if(item.command === command){
            console.log(item.function(inputs));
            found = true;
        }

    }
    if (!found){
        console.log("command not found");
    }
}