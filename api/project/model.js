const db = require('../../data/dbConfig');

const findProject = () =>{
    return db("projects as p")
    .select("p.*")
}

const createProject = (newProject) => {
    return db ("projects as p")
    .insert(newProject)
    .then(([project_id]) => {
        return db("projects").where('project_id', project_id).first()
      })
    
}

module.exports = {
    findProject, createProject
}