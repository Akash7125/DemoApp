 const mongoose = require('mongoose')
//define schema
const UserSchema = new mongoose.Schema({
name:String,
email:String,
password:Number,
consumer_number:Number,
address:String
})
//create model object
const UserModel = new mongoose.model("Users",UserSchema)
module.exports=UserModel 


// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     username: {type: String,required: true },
//     password: {type: String,required: true },
//     email: {type: String,required: true ,unique: true }
// });

// module.exports = mongoose.model('Users', userSchema,'users');