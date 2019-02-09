const express = require('express');
const router = express.Router();

const jobsController = require('../controllers/jobsController');
const clientsController = require('../controllers/clientsController');

router.get('/job/:job_no', jobsController.getJob);
router.get('/jobs', jobsController.getJobs);
router.get('/jobs/last', jobsController.getLastJob);

router.get('/jobs/labour_types', jobsController.getLabourTypes);

router.post('/jobs/add', jobsController.addJob);
router.post('/job/:job_no/addTimesheet', jobsController.addTimesheet);

router.get('/clients/all-by-name', clientsController.getAllClientNames)
router.get('/clients', clientsController.getClients);
router.post('/clients/add', clientsController.addClient);



module.exports = router;