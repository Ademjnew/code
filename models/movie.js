const mongoose = require("mongoose");

const Schema = mongoose.Schema ; 
const ObjectId = Schema.Types.ObjectId;

const MovieSchema = new Schema({
    userId: {
        type: Number,
        ref: "user",
        //required: [true, "The ID of the user is required"]
    },
    _id: {
        type: Number, 
        required: [true,"Id Field is required"]
    },
    name: {
        type: String
    },
    releaseDate: {
        type: Date, 
        default: new Date()
    },

    duration: {
        type:Number
    },
    actors: { type : Array , "default" : [] },

    ratings:  { type : Array , "default" : [] },
    commentatorsID :  { type : Array , "default" : [] } 

}, { versionKey: false });

MovieSchema.method('toClient', function(p) {
    var movie = p.toObject();
    //Rename fields
    movie.id = movie._id;
    delete movie._id;
    return movie;
});

MovieSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
    }
}); 

const Movie = mongoose.model("movie", MovieSchema);

module.exports = Movie ; 