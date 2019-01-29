var mongoose = require('mongoose');

var Schema  = mongoose.Schema;

var JobSchema = new Schema(
  {
    job_no: {type: Number, required: true, index: {unique: true}},
    client: { type: Schema.Types.ObjectId, ref: 'Client' },
    brand: {type: String, required: true},
    model: {type: String},
    start_date: {type: Date},
    category: {type: String, required: true},
    status: {type: String},
  }
);

JobSchema
  .virtual('url')
  .get(() => {
    return '/api/jobs' + this.job_no;
  });

  module.exports = mongoose.model('Job', JobSchema);
