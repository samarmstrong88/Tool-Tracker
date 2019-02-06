const express = require('express');
const router = express.Router();

const jobsController = require('../controllers/jobsController');
const clientsController = require('../controllers/clientsController');

router.get('/job/:job_no', jobsController.getJob);
router.get('/jobs', jobsController.getJobs);
router.get('/jobs/last', jobsController.getLastJob);


router.post('/jobs/add', jobsController.addJob);

router.get('/clients/all-by-name', clientsController.getAllClientNames)
router.get('/clients', clientsController.getClients);
router.post('/clients/add', clientsController.addClient);


module.exports = router;