const {Schema, model} = require("mongoose");

const User = new Schema({
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    avatar: {type: String},
    ad: {type: String, default: 0}
})

module.exports = model('User', User)