const express = require("express");
const controller = require("../controllers/brand.controller");

const router = express.Router();
module.exports = router;

router.get("/", controller.brand);
