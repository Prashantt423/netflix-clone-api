const router = require('express').Router();
const User = require('../models/User');
const { verify } = require('../verifyJwt');
const CryptoJS = require('crypto-js');
// Update
router.put('/:id', verify, async (req, res) => {
  try {
    if (req.user?.id === req.params?.id || req.user?.isAdmin) {
      if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
          req.body.password,
          process.env.SECRET_KEY
        ).toString();
      }
    } else {
      res.status(403).json('You can update only your account!');
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});
// get
router.get('/find/:id', async (req, res) => {
  try {
    const foundUser = await User.findById(req.params.id);
    if (foundUser) {
      res.status(200).json(foundUser);
    } else {
      res.status(404).json('user not found');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
// get all or get limited
router.get('/', async (req, res) => {
  const query = req.query.limit;
  try {
    if (query) {
      const users = await User.find({}).sort({ _id: -1 }).limit(query);
      res.status(200).json(users);
    } else {
      const foundUser = await User.find({});
      res.status(200).json(foundUser);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
// get user stats
router.get('/stats', async (req, res) => {
  try {
    const data = await User.aggregate([
      {
        $project: {
          month: { $month: '$createdAt' },
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
