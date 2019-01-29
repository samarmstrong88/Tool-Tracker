const mongoose = require('mongoose');
const Job = mongoose.model('Job');
const Client = mongoose.model('Client');


exports.getJobs = async (req, res) => {
  const allJobs = await Job.find({}, (err, obj) => {
    if (err) console.log(err);
    res.setHeader('Content-Type', 'application/json');
    res.json(obj);
  })
}

exports.addJob = async (req, res) => {
  console.log('firing job add');
  console.log(req.body.client);

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