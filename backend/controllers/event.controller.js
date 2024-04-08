const Event = require("../models/dbTesting/event.model.js");


exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({});
    res.status(200).send(events);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getEvent = async (req, res) => {
  try {
    const { id } = req.params
    const event = await Event.findById(id);
    res.status(200).send(event);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    console.log(req.body);
    res.status(200).send(event);
    console.log(event);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}