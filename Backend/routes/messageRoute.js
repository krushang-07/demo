const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();
const { sendMessage ,allMessages} = require("../Controllers/messageController");


router.route("/").post(protect, sendMessage);
router.route("/:chatId").get(protect, allMessages);

module.exports = router;
