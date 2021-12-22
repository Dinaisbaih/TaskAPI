const express = require("express");
const { getAds } = require("../controllers/adsController");
const router = express.Router();

router.get("/", getAds);

module.exports = router;
