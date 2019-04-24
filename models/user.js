const mongoose = require("mongoose");

const Schema = mongoose.Schema ; 

//

const addressSchema = new Schema({
    street: {
        type: String
    }, 
    suite: {
        type: String
    }, 
    city: {
        type: String
    },
    zipcode: {
        type: String
    },
    geo: {
        lat: String,
        lng: String
    }

}, {
    _id: false
    });

const UserSchema = new Schema({
    _id: {
        type: Number, 
        required: [true,"Id Field is required"]
    },
    name: {
        type: String
    },
    username: {
        type: String
    },
    email: {
        type: String
    },
    
    
    website: {
        type: String
    },
    company: {
        name: String,
        catchPhrase: String,
        bs: String

    }
},{ versionKey: false });

UserSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
    }
}); 

const user = mongoose.model("user", UserSchema);

module.exports = user; 