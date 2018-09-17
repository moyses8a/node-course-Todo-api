const {SHA256} = require('crypto-js');

// var m = 'I am user number 3';

// var hash = SHA256(m).toString();

// console.log('Message ->',m);
// console.log('Hash    ->',hash);


var bcrypt = require('bcryptjs');

const password = '123abc!';
bcrypt.genSalt(10,(err,salt) => {
    bcrypt.hash(password,salt,(err,hash) => {
        console.log(hash);
    })
})

// var hash = '$2a$10$e6OFBQEMRPqlI33xN.Ir1OzsOs86O3AhUUcozm0eQdidblyOdXHzC';

// bcrypt.compare(password,hash,(err,res) => {
//     console.log(res);
// });


// UserSchema.pre('save', function (next) {
//     var user = this;
//     if (user.isModified('password')) {
//         bcrypt.genSalt(10, (err, salt) => {
//             bcrypt.hash(user.password, salt, (err, hash) => {
//                 user.password = hash;
//                 next();
//             })
//         })
//     } else {
//         next();
//     }
// });



