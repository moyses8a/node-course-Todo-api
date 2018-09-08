const {MongoClient,ObjectID} = require("mongodb");

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url,{ useNewUrlParser: true }, function(err,client) {
    if (err) {
        return console.log("Unable to connect to MongoDB");
    }
    console.log("Connected to MongoDB Server");
    const db = client.db("TodoApp");

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b9337e4d88d0e7a3f79f17e')
    // }, {
    //     $set:{
    //         completed:true
    //     }
    // }, {
    //     returnOriginal:false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b91e8cc279e8a24848f935e')
    }, {
        $set:{
            name:'Juan Estrocio Laredo Melchaco'
        },
        $inc:{
            age:1
        }
    }, {
        returnOriginal:false
    }).then((result) => {
        console.log(result);
    });

    client.close();
});