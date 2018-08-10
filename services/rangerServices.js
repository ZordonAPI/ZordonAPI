const Ranger = require("../models/rangerModel")

const getAll = req => {
    return new Promise( (resolve, reject) => {
        Ranger.find(req.query, (err,rangers) => {
        })
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
        }).select("-rangerID")
        .then( rangers => {
            resolve(rangers)
        })
        .catch( err => {
            reject(err)
        })
    })
}

const newRanger = ranger => {
    return new Promise( (resolve, reject) => {
        const createdRanger = new Ranger(ranger);
        createdRanger.save( (err, ranger) => {
        })
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
    newRanger,
    getRangerByID
}