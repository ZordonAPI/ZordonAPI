const mongoose = require("mongoose");

const seasonSchema = mongoose.Schema({
    name: String,
    sentaiName: String,
    airingYear: Number,
    numberOfEpisodes: Number,
    firstEpisode: String,
    lastEpisode: String,
    rangers: {
    }
}) 

var Season = mongoose.model("Season", seasonSchema);

module.exports = Season;