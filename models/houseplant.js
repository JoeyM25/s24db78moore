const mongoose = require("mongoose")
const houseplantSchema = mongoose.Schema({
scientific_name: String,
common_name: String,
difficulty: Number
})
module.exports = mongoose.model("Houseplant",
houseplantSchema)

