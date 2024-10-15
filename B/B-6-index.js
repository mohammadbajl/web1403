let cmd = require('./B-6-cmd.js');
let fs = require('fs');

cmd.use("minus", function(contInputs){
    console.log(parseInt(contInputs[1]) - parseInt(contInputs[2]));
});
cmd.use("sum", function(contInputs){
    console.log(parseInt(contInputs[1]) + parseInt(contInputs[2]));
});
cmd.use("multiply", function(contInputs){
    console.log(parseInt(contInputs[1]) * parseInt(contInputs[2]));
});
cmd.use("div", function(contInputs){
    console.log(parseInt(contInputs[1]) / parseInt(contInputs[2]));
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
    fs.writeFile('myDatabase.txt', contInputs, {encoding:'utf8'}, function(error){
        if(error){
            console.log('ERROR:', error);
        }
        else{
            console.log('File Saved.')
        }
    })
});
cmd.main();