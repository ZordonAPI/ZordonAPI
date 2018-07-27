const mongoose = require("mongoose");

const seasonSchema = mongoose.Schema({
    name: String,
    sentaiName: String,
    airingYear: Number,
    seasonNumber: Number,
    numberOfEpisodes: Number,
    firstEpisode: String,
    lastEpisode: String,
    producer: String,
    rangers: Array
}) 

var Season = mongoose.model("Season", seasonSchema);

module.exports = Season;