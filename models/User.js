const { Schema, model } = require('mongoose')


const User = new Schema({                  //обязательное
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
})

module.exports = model('User', User) // первый название, второй схема