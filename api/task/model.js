const db = require('../../data/dbConfig');

const findTask = () => {
    return db("tasks as t")
    .select("t.*")
}

const createTask = (newTask) => {
    return db("tasks").insert(newTask)
}

module.exports = {
    findTask, createTask
}