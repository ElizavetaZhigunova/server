const {Schema, model, ObjectId} = require("mongoose");

const Ad = new Schema({
    idUser: {type: String},
    name: {type: String, required: true},
    photo: {type: String, required: true},
    category: {type: String, required: true},
    price: {type: String, required: true},
    priceDay: {type: String, required: true},
    priceWeek: {type: String, required: true},
    priceMonth: {type: String, required: true},
    city: {type: String, required: true},
    address: {type: String, required: true},
    user: {type: ObjectId, ref: 'User'},
    parent: {type: ObjectId, ref: "Ad"},
    childs: {type: ObjectId, ref: "Ad"}
})

module.exports = model('Ad', Ad)