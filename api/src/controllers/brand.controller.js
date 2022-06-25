const { Brand } = require("../db");
//const {Op} = require('sequelize')
const controller = {};

controller.brand = async (req, res) => {
  let { util } = req.query;
  const allBrands = await Brand.findAll({});

  if (!util) {
    try {
      res.status(200).send(allBrands);
    } catch (err) {
      res.status(400).send(err);
    }
  }
};

module.exports = controller;
