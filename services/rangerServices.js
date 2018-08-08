const Ranger = require("../models/rangerModel")

const getAll = req => {
    return new Promise( (resolve, reject) => {
        Ranger.find(req.query, (err,rangers) => {
            if(err) {
                reject(err)
            } else {
                resolve(rangers)
            }
        }).select("-rangerID")
    })
}

const getRangerByID = id => {
    return new Promise( (resolve, reject) => {
        Ranger.findOne({'rangerID':id}, (err,rangers) => {
            if(err) {
                reject(err)
            } else {
                resolve(rangers)
            }
        }).select("-rangerID")
    })
}

const newRanger = ranger => {
    return new Promise( (resolve, reject) => {
        const createdRanger = new Ranger(ranger);
        createdRanger.save( (err, ranger) => {
            if(err) {
                reject(err)
            } else {
                resolve(ranger)
            }
        })
    })
}

module.exports = {
    getAll,
    newRanger,
    getRangerByID
}