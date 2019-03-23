const mongoose = require('mongoose');
const Job = require('../models/job');
const Client = require('../models/client');

 // post clients/add
exports.addClient = async (req, res) => {
  const client = new Client({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    jobs: [],
  })

  await client.save(err => {
    if (err) console.log(err);
  });

  res.setHeader('Content-Type', 'application/json');
    res.json('');
}

// get /clients/all-by-name
exports.getAllClientNames= async (req, res) => {
  const clientNames = await Client.find({}).select('name');
  res.setHeader('Content-Type', 'application/json');
    res.json(clientNames);
}

// get /clients/:clientId
exports.getClientById = async (req, res) => {
  const client = await Client.findOne({_id: req.params.clientId}).populate('jobs', 'job_no');
  res.json(client);
}

exports.getClients = async (req, res) => {
  let query = Client.find({}).populate('jobs');

  if (req.query.filter) {
    query.select(req.query.filter)
  }
  response = await query.exec();
  
  res.setHeader('Content-Type', 'application/json');
    res.json(response);
}
