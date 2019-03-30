const mongoose = require('mongoose');
const Job = require('../models/job');
const Client = require('../models/client');
const { performance, PerformanceObserver } = require('perf_hooks');
const util = require('util');
const debuglog = util.debuglog('performance');


exports.getJob = async (req, res) => {
  let query = Job.findOne({job_no: req.params.job_no}).populate('client', 'name');
  job = await query.exec();
  res.setHeader('Content-Type', 'application/json');
  res.json(job);
}

exports.addTimesheet = async (req, res) => {
  Job.findOne({job_no: req.params.job_no}, (err, job) => {
    if (err) console.log(err)
    job.timesheets.push(req.body)
    job.save();
    res.status(201).send('Created Timesheet');
  })
}


exports.deleteTimesheet = async (req, res) => {
  //pull/delete the timesheet with id: _id on job with job_no:job_no
  Job.update({'job_no': req.params.job_no}, {$pull: {'timesheets': {'_id': req.params.timesheetId}}}, 
  (err, result) => {
    if (err) console.log(err);
    res.setHeader('Content-Type', 'application/json');
    res.json(result);
  }
  );

}

exports.getJobs = async (req, res) => {
  performance.mark('Getting Jobs');
  const allJobs = await Job.find({}).populate('client').exec((err, obj) => {
    if (err) console.log(err);
    res.setHeader('Content-Type', 'application/json');
    res.json(obj);
  })
  performance.mark('Got Jobs');
  performance.measure('Job fetch timing', 'Getting Jobs', 'Got Jobs')





  
}

exports.getLastJob = async (req, res) => {
  const lastJob = await Job.find({}).sort({'_id': -1}).limit(1);
  // if (res.err) console.log(err);
  res.setHeader('Content-Type', 'application/json');
  res.json(lastJob[0]);
}

exports.getLabourTypes =  (req, res) => {
  const labourTypes = Job.schema.path('timesheets').schema.path('labourType').enumValues;
  // console.log(labourTypes);
  res.setHeader('Content-Type', 'application/json');
res.json(labourTypes);
}

exports.addJob = async (req, res) => {
  // console.log('firing job add');
  // console.log(req.body.client);

  Client.findById(req.body.client, (err, client) => {
    if (err) console.log(err);
    console.log(client);

    var newJob = new Job({
      job_no: req.body.job_no,
      client, 
      brand: req.body.brand,
      model: req.body.model,
      start_date: req.body.start_date,
      category: req.body.category,
      status: req.body.status,
    })

    newJob.save(err => {
      if (err) console.log(err);
    });

    client.jobs.push(newJob)

    client.save((err) => {
      return res.redirect(`/`);
    });

  })
}

const obs = new PerformanceObserver((items) => {
  items.getEntries().forEach((item) => {
    console.log(item.name, + ' ' + item.duration)
  })
})
obs.observe({entryTypes: ['measure']})