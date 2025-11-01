const mongoose = require('mongoose');

const vaccineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  origin: { type: String, required: true },
  productionDate: { type: Date, required: true },
  expiryDate: { type: Date, required: true },
  status: { type: String, default: 'Available' }
});

module.exports = mongoose.model('Vaccine', vaccineSchema);