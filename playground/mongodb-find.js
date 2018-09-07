const {MongoClient,ObjectID} = require("mongodb");

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url,{ useNewUrlParser: true }, function(err,client) {
    if (err) {
        return console.log("Unable to connect to MongoDB");
    }
    console.log("Connected to MongoDB Server");
    const db = client.db("TodoApp");

    // db.collection("Todos").find({_id: new ObjectID('5b9094ebe56d5f2ee9b9ae24')}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
        
    // },(err) => {
    //     console.log('Unable to fetch Todos',err);
    // });

    // db.collection("Todos").find({
    //     // _id: new ObjectID('5b9094ebe56d5f2ee9b9ae24')
    // }).count().then((count) => {
    //     console.log(`Todos count: ${count}`);        
    // },(err) => {
    //     console.log('Unable to fetch Todos',err);
    // });

    db.collection("Users").find({
        name: 'Moises'
    }).count().then((count) => {
        console.log(`Todos count: ${count}`);        
    },(err) => {
        console.log('Unable to fetch Todos',err);
    });

    client.close();
});