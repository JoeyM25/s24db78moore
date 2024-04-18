const mongoose = require("mongoose")
const houseplantSchema = mongoose.Schema({
    scientific_name: String,
    common_name: String,
    difficulty: {
        type: Number,
        min: 1,
        max: 10
    }
});

module.exports = mongoose.model("Houseplant", houseplantSchema)

