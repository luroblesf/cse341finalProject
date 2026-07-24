const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  birthDate: { type: Date, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model("Patient", PatientSchema);
