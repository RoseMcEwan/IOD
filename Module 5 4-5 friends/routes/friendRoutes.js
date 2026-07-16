const express = require("express");
const router = express.Router();

const friendController = require("../controllers/friendController");

router.get("/filter", friendController.filterFriends);

router.get("/info", friendController.getInfo);

router.get("/", friendController.getAllFriends);

router.get("/:id", friendController.getFriendById);

router.put("/:id", friendController.updateFriend);

module.exports = router;