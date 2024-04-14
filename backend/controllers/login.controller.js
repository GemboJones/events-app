const User = require("../models/user.model.js");

exports.userLogin = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.find({ email });

    // if (!user[0]) {
    //   return res.status(404).send({ message: "User not found" });
    // }
    res.status(200).send(user[0]);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
