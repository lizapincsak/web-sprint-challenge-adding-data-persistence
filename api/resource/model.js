const db = require('../../data/dbConfig');


const findResource = () => {
    return db("resources as r")
    .select("r.*")
}

const createResource = (newResource) => {
    return db('resources').insert(newResource)
}

module.exports = {
    findResource, createResource
}