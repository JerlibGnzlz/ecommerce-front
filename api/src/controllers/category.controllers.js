const { Category } = require("../db");
//const {Op} = require('sequelize')
const controller = {};

controller.category = async (req, res) => {
  let { util } = req.query;
  const allCategories = await Category.findAll({});

  if (!util) {
    try {
      res.status(200).send(allCategories);
    } catch (err) {
      res.status(400).send(err);
    }
  }
};

module.exports = controller;
