const User = require("../models/user.model.js");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).populate("myEvents");

    user.myEvents.sort(
      (a, b) => a.startDate.getTime() - b.startDate.getTime()
    );
    
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { email } = req.body;
    const emailExists = await User.findOne({ email });

    if (emailExists) {
      return res.send({ message: "email already in use" });
    }
    const user = await User.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    // user id
    const { id } = req.params;

    if (Object.keys(req.body)[0] === "myEvents") {
      const user = await User.findByIdAndUpdate(id, { $addToSet: req.body });
      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }
    } else {
      const user = await User.findByIdAndUpdate(id, req.body);
      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }
    }
    const updatedUser = await User.findById(id).populate("myEvents");

    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
