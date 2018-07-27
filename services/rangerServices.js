const Ranger = require("../models/rangerModel")

const getAll = () => {
    return new Promise( (resolve, reject) => {
        Ranger.find({}, (err,rangers) => {
            if(err) {
                reject(err)
            } else {
                resolve(rangers)
            }
        })
    })
}

const newRanger = (ranger) => {
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
    newRanger
}