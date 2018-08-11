const Season = require("../models/seasonModel")

const getAll = req => {
    return new Promise( (resolve, reject) => {
        Season.find(req.query, (err,seasons) => {
        }).select('-seasonNumber -_id -__v')
        .then( seasons => {
            resolve(seasons)
        })
        .catch( err => {
            reject(err)
        })
    })
}

const getSeasonByNumber = seasonNumber => {
    return new Promise( (resolve, reject) => {
        Season.findOne({'seasonNumber':seasonNumber}, (err,season) => {
        }).select("-seasonNumber -_id -__v")
        .then( season => {
            resolve(season)
        })
        .catch( err => {
            reject(err)
        })
    })
}

const newSeason = season => {
    return new Promise( (resolve, reject) => {
        const createdSeason = new Season(season);
        createdSeason.save( (err, season) => {
        })
        .then( season => {
            resolve(season)
        })
        .catch( err => {
            reject(err)
        })
    })
}

module.exports = {
    getAll,
    getSeasonByNumber,
    newSeason
}