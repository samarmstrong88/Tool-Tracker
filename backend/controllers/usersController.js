var bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../models/user');

const secret = process.env.JWT_SECRET;
const saltRounds = 12;



exports.createUser =  (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {

  const user = new User({
    username: req.body.name,
    email: req.body.email.toLowerCase(),
    hash,
  })

  await user.save((err, user) => {
    if(err) return res.status(500).send(err)

    const token = jwt.sign({id: user._id}, secret, {expiresIn: 86400});
    res.status(200).send({logged_in: true, token: token});
  });
  })
}

// exports.validatePassword = async (email, password) => {
//   try{
//   email = email.toLowerCase();
//   const hash = await User.findOne({'email': userId}).select('hash');
//   const match = await bcrypt.compare(password, hash);
//   return match;
//   }
//   catch (err){
//     console.log(err)
//   }
// }

exports.signIn = async (req, res) => {
  const unauthErr = new Error('Unauthorized');
  try {
    const email = req.body.email.toLowerCase();
    const password = req.body.password;
    if(!email || !password) throw unauthErr;
    const user = await User.findOne({'email': email});
    if (!user) throw unauthErr;
    const match = await bcrypt.compare(password, user.hash);

    if (match) {
      const token = jwt.sign({userId: user._id}, secret, {expiresIn: 86400}); //86400s = 24h
      res.status(200).cookie('authToken', token, {
        httpOnly: true,
        maxAge: 86400000}) //in ms, 24h
      .send({userId: user._id, username: user.username});
    }
    else throw unauthErr;
  } 
  
  catch(err) {
    console.log(err.message);
    if (err.message === 'Unauthorized') {
      res.status(401).send(JSON.stringify('There was a problem with your email or password'));
    }
    else {
      res.status(400).send(JSON.stringify(err.message));
    }
    
  }
}

exports.me = async (req, res) => {
  console.log(req.userId);
  if (!req.userId) res.sendStatus(401);
  user = await User.findOne({_id: req.userId})
  res.setHeader('Content-Type', 'application/json');
  res.send({userId: user._id, username: user.username}  )
}

// function generateJWT()