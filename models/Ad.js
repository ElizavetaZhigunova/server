import {Schema, model} from "mongoose";

const AdSchema = new Schema({
    user: {type: Schema.Types.ObjectId,
        ref: 'User',
        },
    name: {type: String, required: true},
    photo: {type: String, required: true},
    category: {type: String, required: true},
    price: {type: String, required: true},
    priceDay: {type: String, required: true},
    priceWeek: {type: String, required: true},
    priceMonth: {type: String, required: true},
    city: {type: String, required: true},
    address: {type: String, required: true},
    viewsCount: {
        type: Number,
        default: 0
    },
},
{
    timestamps: true,

})

export default model('Ad', AdSchema)