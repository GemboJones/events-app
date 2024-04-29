const User = require("../models/user.model.js");

exports.userLogin = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.send({message: "user not found"});
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
