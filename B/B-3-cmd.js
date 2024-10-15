let inputs = process.argv.slice(2);
let command = inputs[0];

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
    for(let item of controllers){
        if(item.command === command){
            console.log(item.function(parseInt(inputs[1]), parseInt(inputs[2])));
            found = true;
        }

    }
    if (!found){
        console.log("command not found");
    }
}
