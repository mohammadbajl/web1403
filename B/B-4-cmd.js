
names = []

function create_record(name, fname) {
    names.push({
        name: name,
        fname: fname,
    })
}

function start(){
    for (let name of names){
        console.log(name.name + " " +  name.fname);
    }
}

module.exports = {
    create_record: create_record,
    start: start
}