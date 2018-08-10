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

const getPaginated = req => {
    return new Promise( (resolve, reject) => {
        Ranger.paginate(req.query, {limit:4}, (err,rangers) => {
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
    getPaginated,
    newRanger,
    getRangerByID
}