const express = require("express");
const router = express.Router();
const controller = require("../../controllers/mongo/usersController");

router.get("/users", controller.index);

module.exports = router;