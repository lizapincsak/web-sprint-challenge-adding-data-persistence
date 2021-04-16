const db = require('../../data/dbConfig');


const findResource = () => {
    return db("resources as r")
    .select("r.*")
}

const createResource = (newResource) => {
    return db('resources').insert(newResource)
    .then(([resource_id]) => {
        return db("resources").where('resource_id', resource_id)
    })
}

module.exports = {
    findResource, createResource
}