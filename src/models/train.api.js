const mongoose=require("mongoose")
const trainSchema = new mongoose.Schema(
    {
        name: { type: String },
        code:{type:String},
    }, {
        versionKey:false
    }
)
const Train = mongoose.model("Train", trainSchema)
module.exports=Train