const Ranger = require("../models/rangerModel")

const getAll = req => {
    return new Promise( (resolve, reject) => {
        Ranger.find(req.query, (err,rangers) => {
        }).select("-rangerID -_id -__v")
        .then( rangers => {
            resolve(rangers)
        })
        .catch( err => {
            reject(err)
        })
    })
}

const getRangerByID = id => {
    return new Promise( (resolve, reject) => {
        Ranger.findOne({'rangerID':id}, (err,rangers) => {
        }).select("-rangerID -_id -__v")
        .then( rangers => {
            resolve(rangers)
        })
        .catch( err => {
            reject(err)
        })
    })
}

module.exports = {
    getAll,
    getRangerByID
}