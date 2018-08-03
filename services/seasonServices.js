const Season = require("../models/seasonModel")

const getAll = req => {
    return new Promise( (resolve, reject) => {
        Season.find(req.query, (err,seasons) => {
            if(err) {
                reject(err)
            } else {
                resolve(seasons)
            }
        })
    })
}

const newSeason = season => {
    return new Promise( (resolve, reject) => {
        const createdSeason = new Season(season);
        createdSeason.save( (err, season) => {
            if(err) {
                reject(err)
            } else {
                resolve(season)
            }
        })
    })
}

module.exports = {
    getAll,
    newSeason
}