const mongoose=require("mongoose")
const albumSchema = new mongoose.Schema(
    {
        title: {type:String},
        artist: {type:String},
        email: {type:String},
        password: {type:String},
        cover: {type:String},
        genre: {type:String},
        year: {type:String},
        img: {type:String}
    }, {
        versionKey:false
    }
)
const Album = mongoose.model("Album", albumSchema)
module.exports=Album