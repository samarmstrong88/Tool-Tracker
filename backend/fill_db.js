var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Job = require('./models/job.js');

var brands = ['milwaukee', 'makita', 'aeg', 'bosch', 'ryobi', 'hitachi',
              'paslode', 'ramset', 'dewalt', 'metabo', 'other' ];

var status_types = ['to-be-started', 'completed', 'parts-on-order', 'parts-arrived']

var lower = 109
var number = 501



for (var i = lower + 1 ; i < lower + number ; i++) {
  var job = new Job({
      job_no: i+1,
      brand: brands[Math.floor(Math.random() * brands.length)],
      status: status_types[Math.floor(Math.random() * status_types.length)],
      category: (Math.random() > 0.5) ? 'Warranty': 'Standard'

  });

  job.save(err => {
      if (err) console.log(err);
  });

  console.log('added item '+ i)
}
