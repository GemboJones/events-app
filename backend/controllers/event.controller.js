const Event = require("../models/event.model.js");

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({});
    res.status(200).send(events);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id);
    res.status(200).send(event);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(200).send(event);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(Object.keys(req.body)[0]);
    if (Object.keys(req.body)[0] === 'attending') {
      const event = await Event.findByIdAndUpdate(id, {$addToSet: req.body});
      if (!event) {
        return res.status(404).send({ message: "Event not found" });
      }
    } else {
    const event = await Event.findByIdAndUpdate(id, req.body);
    if (!event) {
      return res.status(404).send({ message: "Event not found" });
    }
    }
    const updatedEvent = await Event.findById(id);
    res.status(200).send(updatedEvent);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// const updateAttending = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const event = await Event.findByIdAndUpdate(id, {$addToSet: req.body});
//     if (!event) {
//       return res.status(404).send({ message: "Event not found" });
//     }
//     const updatedEvent = await Event.findById(id);
//     res.status(200).send(updatedEvent);
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// };

module.exports = { getAllEvents, getEvent, createEvent, updateEvent, 
  // updateAttending 
};
