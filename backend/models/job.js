var mongoose = require('mongoose');

var Schema  = mongoose.Schema;


var timeSheetsSchema = new Schema(
  {
    labour_type: {type: String, enum: ['Warranty Labour', 'Standard Labour', 'Quote']},
    time_spent: {type: Number}, //time in minutes
    notes: {type: String},
    
  }
);
var JobSchema = new Schema(
  {
    job_no: {type: Number, required: true, index: {unique: true}},
    client: { type: Schema.Types.ObjectId, ref: 'Client' },
    contact_no: {type: Number},
    contact_name: {type: String},
    brand: {type: String, required: true},
    model: {type: String},
    start_date: {type: Date},
    category: {type: String, required: true},
    status: {type: String},
    description: {type: String},
    timesheets: [timeSheetsSchema],
  }
);

JobSchema
  .virtual('url')
  .get(() => {
    return '/api/jobs' + this.job_no;
  });

  module.exports = mongoose.model('Job', JobSchema);
