const db = require('../../data/dbConfig');

const findProject = () =>{
    return db("projects as p")
    .select("p.*")
}

const createProject = (newProject) => {
    return db ("projects as p")
    .insert(newProject)
}

module.exports = {
    findProject, createProject
}