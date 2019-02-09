var mongoose = require('mongoose');

var Schema  = mongoose.Schema;

var labour_types = ['Warranty Labour', 'Standard Labour', 'Quote'];


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
    timesheets: [{
      labourType: {type: String, enum: labour_types}, // enumerated to fill out the <select>
      labourTime: {type: Number}, //time in minutes
      labourNotes: {type: String},
    }],
  }
);

JobSchema
  .virtual('url')
  .get(() => {
    return '/api/jobs' + this.job_no;
  });

  // UserSchema
  // .virtual('labour_types')
  // .get(() => {
  //   return labour_types;
  // )

  module.exports = mongoose.model('Job', JobSchema);
