const { Ad } = require("../db/models");

exports.getAds = async (req, res) => {
  try {
    const ads = await Ad.findAll();
    res.json(ads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
