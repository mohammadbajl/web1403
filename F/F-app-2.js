let app = require('./F-http-1.js');
let fs = require('fs');

function write(res, body){
    res.write(JSON.stringify(body));
    res.end();
}

app.use('/test', function(request, response){
    console.log('test.')
});

app.use('/sum', function(request, response){
    result = {
        data: parseInt(request.path[2]) + parseInt(request.path[3])
    };
    write(response, result);
});
app.use('/multiply', function(request, response){
    result = {
        data: parseInt(request.path[2]) * parseInt(request.path[3])
    };
    write(response, result);
});
app.use('/printRecord', function(request, response){
    result = {
        "name": request.path[2],
        "family": request.path[3],
        "email": request.path[4]
    }
    write(response, result);
});
app.use('/saveRecord', function(request, response){
    result = {
        "name": request.path[2],
        "family": request.path[3],
    }
    writeFile('database.txt', result, function(){
        console.log('File Saved.');
    });
});

app.use('/create', function(request, response){
    result = {
        "name": request.path[3],
        "family": request.path[4]
    };
    writeFile(request.path[2], result, function(){
        console.log('File Saved.');
    });
});
function writeFile(name, body, callback){
    body = JSON.stringify(body);
    fs.writeFile(name, body, function(error){
        if(error){
            console.log('ERROR:', error);
            write(res, { result: 'ERROR:', error});
        }
        else{
            callback();
        }
    })
}


app.start();