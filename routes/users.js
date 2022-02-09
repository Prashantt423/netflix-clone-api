const router = require('express').Router();
const User = require('../models/User');
const { verify } = require('../verifyJwt');
const CryptoJS = require('crypto-js');
// Update
router.put('/:id', verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
    }

    try {
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
  } else {
    res.status(403).json('You can update only your account!');
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
// get all
// get user stats
// delete
router.delete('/:id', verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      const updatedUser = await User.findByIdAndDelete(req.params.id);
      res.status(200).json('deleted successfully!');
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json('You can delete only your account!');
  }
});
module.exports = router;
