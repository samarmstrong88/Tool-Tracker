const mongoose = require('mongoose');
const Job = require('../models/job');
const Client = require('../models/client');

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

exports.getAllClientNames= async (req, res) => {
  const clientNames = await Client.find({}).select('name');
  res.setHeader('Content-Type', 'application/json');
    res.json(clientNames);
}

exports.getClients = async (req, res) => {
  let query = Client.find({});

  if (req.query.filter) {
    query.select(req.query.filter)
  }
  response = await query.exec();
  
  res.setHeader('Content-Type', 'application/json');
    res.json(response);
}
