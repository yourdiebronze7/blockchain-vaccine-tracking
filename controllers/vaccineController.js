const Vaccine = require('../models/Vaccine');

exports.createVaccine = async (req, res) => {
  try {
    const vaccine = new Vaccine(req.body);
    await vaccine.save();
    res.status(201).send(vaccine);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getVaccines = async (req, res) => {
  try {
    const vaccines = await Vaccine.find();
    res.status(200).send(vaccines);
  } catch (error) {
    res.status(500).send(error);
  }
};