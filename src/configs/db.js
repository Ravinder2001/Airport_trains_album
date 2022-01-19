const mongoose = require("mongoose")
const connect = () => {
    return mongoose.connect("mongodb+srv://ravinder:ravinder@api.wao4w.mongodb.net/api?retryWrites=true&w=majority")
}
module.exports = connect;