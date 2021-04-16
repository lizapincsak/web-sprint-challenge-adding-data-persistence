const Task = require('./model');
const router = require("express").Router();

router.get('/', (req, res, next) => {
    Task.findTask()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Task.createTask(req.body)
        .then((newTask) => {
            res.status(200).json(newTask)
        })
        .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      sageAdvice: 'Finding the real error is 90% of the bug fix',
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router;