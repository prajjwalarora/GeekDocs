const express = require("express");
const docController = require("../controllers/docController");
const authController = require("../controllers/authController");

const router = express.Router();

router.use(authController.protect);
router.route("/create").post(docController.create);
router.route("/:docId").get(docController.getOne);
router.route("/").get(docController.get);
router.route("/activity").post(docController.saveActivity);
router.route("/notes").post(docController.saveNotes);

module.exports = router;
