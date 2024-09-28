let app = require('./F-http-3.js');
let fs = require('fs');


app.use('/test', function(request, response){
    console.log('test.')
});

app.use('/file', function(request, response){

    // let data = JSON.parse(request.data);
    let data = request.data;
    writeFile(data.filename, data.content, function(){
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