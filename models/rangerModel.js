const mongoose = require("mongoose");

const rangerSchema = mongoose.Schema({
    name: String,
    gender: String,
    season: String,
    color: String,
    homeworld: String,
    firstAp: String,
    lastAp: String,
    numberOfAp: Number,
    actor: String,

})

var Ranger = mongoose.model("Ranger", rangerSchema);

module.exports = Ranger;