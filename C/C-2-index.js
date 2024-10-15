let cmd = require('./C-2-cmd.js');
let fs = require('fs');

cmd.use("minus", function(contInputs){
    console.log(cmd.parseInput(contInputs[1]) - cmd.parseInput(contInputs[2]));
});
cmd.use("sum", function(contInputs){
    console.log(cmd.parseInput(contInputs[1]) + cmd.parseInput(contInputs[2]));
});
cmd.use("multiply", function(contInputs){
    console.log(cmd.parseInput(contInputs[1]) * cmd.parseInput(contInputs[2]));
});
cmd.use("div", function(contInputs){
    console.log(cmd.parseInput(contInputs[1]) / cmd.parseInput(contInputs[2]));
});
cmd.use("printRecord", function(contInputs){
    console.log({
        name: contInputs[1],
        family: contInputs[2],
        age: contInputs[3],
        email: contInputs[4]
    });
});
cmd.use("saveRecord", function(contInputs){
    fs.writeFile('myDatabase.txt', contInputs[1], {encoding:'utf8'}, function(error){
        if(error){
            console.log('ERROR:', error);
        }
        else{
            console.log('File Saved.')
        }
    })
});
cmd.use("saveRecord2", function(contInputs){
    let data = 
        {
        name: contInputs[1],
        family: contInputs[2],
        age: contInputs[3],
        email: contInputs[4]
        };

    fs.readFile("myDatabase.txt", function(error, prev_data) {
        if (error) {        
            fs.writeFile('myDatabase.txt', JSON.stringify({"data": [data]}), {encoding:'utf8'}, function(error){
                if(error){
                    console.log('ERROR:', error);
                }
                else{
                    console.log('File Saved.')
                }
            })
        }
        else {
            prev_data = JSON.parse(prev_data.toString());
            prev_data.data.push(data)

        }
    })
    

});
    
    
    
cmd.start();