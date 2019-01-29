var mongoose = require('mongoose');

var Schema  = mongoose.Schema;

var ClientSchema = new Schema(
  {
    
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    jobs: [{type: Schema.Types.ObjectId, ref: 'Job'}],
  }
);

ClientSchema
  .virtual('url')
  .get(() => {
    return '/api/clients' + this.client_id;
  });

  module.exports = mongoose.model('Client', ClientSchema);
