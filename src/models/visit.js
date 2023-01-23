const { Schema, model } = require('mongoose');

const VisitSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  doctor: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  complaints: {
    type: String,
    required: true,
  },
  userid: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
  }
});

module.exports = model('Visits', VisitSchema);
