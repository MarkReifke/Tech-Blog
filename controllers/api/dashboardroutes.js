const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/:id', async (req, res) => {
  try {
    const userData = await User_id.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));
    console.log('Users: ', users);

    res.render('dashboard', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});