const sequelize = require('../config/connection');
const { User, Post, Reply } = require('../models');

const userData = require('./userData.json');
const postData = require("./postSeeds.json");
const replyData = require("./replySeeds.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });
  await Reply.bulkCreate(replyData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();