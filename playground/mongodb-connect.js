const {MongoClient,ObjectID} = require("mongodb");
var obj = new ObjectID();
console.log(obj);

var user = {name:'andrew',age:25};
var {age} = user;
console.log(age);

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url,{ useNewUrlParser: true }, function(err,client) {
    if (err) {
        return console.log("Unable to connect to MongoDB");
    }
    console.log("Connected to MongoDB Server");
    const db = client.db("TodoApp");

    // db.collection("Todos").insertOne({
    //     text: "Something to do",
    //     completed: false
    // }, (err,result) => {
    //     if (err) {
    //         return console.log("Unable to insert todo",err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    db.collection("Users").insertOne({
        name: "Moises",
        age: 23,
        location: "Jaime Nuno 47"
    }, (err,result) => {
        if (err) {
            return console.log("Unable to insert todo",err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });

    client.close();
});