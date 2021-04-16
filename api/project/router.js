const Project = require('./model');
const router = require('express').Router();

router.get('/', (req, res, next) => {
    Project.findProject()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Project.createProject(req.body)
        .then((newProject) => {
            res.status(201).json(newProject)
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