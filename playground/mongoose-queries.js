var {ObjectID} = require('mongodb');
var { mongoose } = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');

var {User} = require('./../server/models/user');
var idUser = '5b97258517a741bf0f3c73e5';

User.findById(idUser).then((user) => {
    if(!user){
        return console.log('User not found');
    }
    console.log('Usuario encontrado: ',user);
}).catch((e) => console.log(e));

// var id = '5b957124ea5b15076e348fde';
// if (ObjectID.isValid(id)) {
    
// }
// Todo.find({
//     _id:id
// }).then((todos) => {
//     console.log('Todos',todos);
// });

// Todo.findOne({
//     _id:id
// }).then((todo) => {
//     console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Todo not fount');
//     }
//     console.log('Todo by id',todo);
// }).catch((e) => console.log(e));
