const {MongoClient,ObjectID} = require("mongodb");

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url,{ useNewUrlParser: true }, function(err,client) {
    if (err) {
        return console.log("Unable to connect to MongoDB");
    }
    console.log("Connected to MongoDB Server");
    const db = client.db("TodoApp");

    db.collections('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
        console.log(result);
    });
    db.collections('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
        console.log(result);
    });
    db.collections('Todos').findAndDelete({completed:false}).then((result) => {
        console.log(result);
    });

    db.collection("Users").find({
        name: 'Moises'
    }).count().then((count) => {
        console.log(`Todos count: ${count}`);        
    },(err) => {
        console.log('Unable to fetch Todos',err);
    });

    client.close();
});