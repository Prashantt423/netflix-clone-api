const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

// REGISTER
router.post('/register', async (req, res) => {
  try {
    // Hashed password
    const hashedPassword = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    );

    // New user and response
    const newUser = await new User({
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  try {
    // find user with username
    const foundUser = await User.findOne({ email: req.body.email });

    if (foundUser) {
      // decrypt its password
      const foundPassword = CryptoJS.AES.decrypt(
        foundUser.password,
        process.env.SECRET_KEY
      ).toString(CryptoJS.enc.Utf8);
      if (foundPassword === req.body.password) {
        const { password, ...info } = foundUser._doc;
        const accessToken = jwt.sign(
          { id: foundUser._id, isAdmin: foundUser.isAdmin },
          process.env.SECRET_KEY,
          { expiresIn: '5d' }
        );
        res.status(200).json({ ...info, accessToken });
      } else {
        res.status(502).json('wrong username/password');
      }
    } else {
      res.status(502).json('wrong username/password');
    }
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
