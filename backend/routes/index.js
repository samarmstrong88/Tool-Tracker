const express = require('express');
const router = express.Router();

const jobsController = require('../controllers/jobsController');
const clientsController = require('../controllers/clientsController');

router.get('/jobs', jobsController.getJobs);

router.post('/jobs/add', jobsController.addJob);

router.post('/clients/add', clientsController.addClient);


module.exports = router;