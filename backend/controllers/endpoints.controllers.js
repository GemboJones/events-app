const endpoints = require('../endpoints.json')

exports.getEndpoints = async (req, res) => {
  try {
    res.status(200).send(endpoints);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};