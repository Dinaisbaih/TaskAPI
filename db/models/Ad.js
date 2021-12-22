const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Ad", {
    type: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    subtitle: {
      type: DataTypes.STRING,
    },
    titleTwo: {
      type: DataTypes.STRING,
    },
    caption: {
      type: DataTypes.STRING,
    },
    captionTwo: {
      type: DataTypes.STRING,
    },
    captionThree: {
      type: DataTypes.STRING,
    },
    captionThree: {
      type: DataTypes.STRING,
    },
    subhead: {
      type: DataTypes.STRING,
    },
    beforePrice: {
      type: DataTypes.STRING,
    },

    afterPrice: {
      type: DataTypes.STRING,
    },
    backgroundImage: {
      type: DataTypes.STRING,
    },
    logo: {
      type: DataTypes.STRING,
    },
    imageView: {
      type: DataTypes.STRING,
    },
  });
};
