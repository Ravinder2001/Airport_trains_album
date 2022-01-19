const mongoose=require("mongoose")
const airportSchema = new mongoose.Schema(
    {
        IATA_code: {type:String},
      ICAO_code: {type:String},
      airport_name: {type:String},
      city_name: {type:String}
    }, {
        versionKey:false
    }
)
const Airport = mongoose.model("Airport", airportSchema)
module.exports=Airport