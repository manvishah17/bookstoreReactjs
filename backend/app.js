  // const express = require('express');
  // const cors = require('cors');
  // const mongoose = require('mongoose');
  // const user = require('./userdetails');
  // const app = express(); 
  // const Jwt = require('jsonwebtoken');
  // const JwtKey='E-commerce';
  // app.use(express.json());
  // app.use(cors());

  // const mongourl =
  //   'mongodb+srv://manvishah2003:manvijaan1702.@cluster0.rw2yfnp.mongodb.net/?retryWrites=true&w=majority';
  // mongoose
  //   .connect(mongourl, {
  //     useNewUrlParser: true,
  //   })
  //   .then(() => {
  //     console.log('Connected to MongoDB');
  //   })
  //   .catch((e) => console.log('Error connecting to MongoDB:', e));

  // // const User =mongoose.model("UserInfo");

  // app.post('/register', async (req, res) => {
  //   const { username, password } = req.body;
  
  //   try {
  //     const existingUser = await user.findOne({ username });
  
  //     if (existingUser) {
  //       return res.status(400).json({ msg: 'User already exists' });
  //     }
  
  //     const newUser = new user({ username, password });
  //     await newUser.save();
  
  //     Jwt.sign({ username }, JwtKey, (err, token) => {
  //       if (err) {
  //         console.error('Error signing token:', err);
  //         return res.status(500).json({ msg: 'Token signing error' });
  //       }
        
  //       const userObj = { username }; 
  //       res.json({ userObj, auth: token });
  //     });
  
  //   } catch (error) {
  //     console.error('Error adding a user:', error);
  //     res.status(500).json({ msg: 'Internal server error' });
  //   }
  // });
  // app.post('/login', async (req, res) => {
  //   const { username, password } = req.body;
  
  //   try {
  //     const userObj = await user.findOne({ username });
  //     if (!userObj || userObj.password !== password) {
  //       return res.status(401).json({ msg: 'Invalid credentials //' });
  //     }
  //     Jwt.sign({ userObj }, JwtKey, (err, token) => {
  //       if (err) {
  //         console.error('Error signing token:', err);
  //         return res.status(500).json({ msg: 'Token signing error' });
  //       }
  //       res.send({userObj,auth:token})
  //     });
      
      
  //   } catch (error) {
  //     console.error('Error signing in:', error);
  //     return res.status(500).json({ msg: 'Internal server error' });
  //   }
  // });
 
  // app.listen(5000, () => {
  //   console.log('Server started on http://localhost:5000');
  // });

  const express = require('express');
  const cors = require('cors');
  const mongoose = require('mongoose');
  const user = require('./userdetails');
  const app = express(); 
  const Jwt = require('jsonwebtoken');
  const JwtKey='E-commerce';
  app.use(express.json());
  app.use(cors());

  const mongourl ='mongodb+srv://manvishah2003:manvijaan1702.@cluster0.rw2yfnp.mongodb.net/';
    // 'mongodb+srv://manvishah2003:manvijaan1702.@cluster0.rw2yfnp.mongodb.net/?retryWrites=true&w=majority';
  mongoose
    .connect(mongourl, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((e) => console.log('Error connecting to MongoDB:', e));

  // const User =mongoose.model("UserInfo");

  app.post('/register', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const existingUser = await user.findOne({ username });
  
      if (existingUser) {
        return res.status(400).json({ msg: 'User already exists' });
      }
  
      const newUser = new user({ username, password });
      await newUser.save();
  
      Jwt.sign({ username }, JwtKey, (err, token) => {
        if (err) {
          console.error('Error signing token:', err);
          return res.status(500).json({ msg: 'Token signing error' });
        }
        
        const userObj = { username }; 
        res.json({ userObj, auth: token });
      });
  
    } catch (error) {
      console.error('Error adding a user:', error);
      res.status(500).json({ msg: 'Internal server error' });
    }
  });
  app.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const userObj = await user.findOne({ username });
      if (!userObj || userObj.password !== password) {
        return res.status(401).json({ msg: 'Invalid credentials //' });
      }
      Jwt.sign({ userObj }, JwtKey, (err, token) => {
        if (err) {
          console.error('Error signing token:', err);
          return res.status(500).json({ msg: 'Token signing error' });
        }
        res.send({userObj,auth:token})
      });
      
      
    } catch (error) {
      console.error('Error signing in:', error);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  });
 
  app.listen(5000, () => {
    console.log('Server started on http://localhost:5000');
  });