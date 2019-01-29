const mongoose = require('mongoose');
const Job = mongoose.model('Job');
const Client = mongoose.model('Client');

exports.addClient = async (req, res) => {
  console.log(req.body.name);

  var client = new Client({
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
