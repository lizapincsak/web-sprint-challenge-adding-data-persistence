const db = require('../../data/dbConfig');

const findTask = () => {
    return db("tasks as t")
    .select("t.*")
}

const createTask = (newTask) => {
    return db("tasks").insert(newTask)
    .then(([task_id]) => {
        return db("tasks").where('task_id', task_id).first()
      })
}

module.exports = {
    findTask, createTask
}