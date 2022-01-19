const mongoose=require("mongoose")
const songSchema = new mongoose.Schema(
    {
        artist: {type:String},
        song1: {type:String},
        is1: {type:String},
        dur1: {type:String},
        song2: {type:String},
        is2: {type:String},
        dur2: {type:String},
        song3: { type: String },
        is3: { type: String },
        dur3: { type: String },
        song4: { type: String },
        dur4: { type: String },
        is4: { type: String },
    }, {
        versionKey:false
    }
)
const Song = mongoose.model( "Song", songSchema)
module.exports =Song