// // index.js (your backend entry file)
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const user = require('./userdetails'); // Assign the result of require to a variable
const app = express(); // Create an instance of Express

app.use(express.json());
app.use(cors());

const mongourl =
"mongodb+srv://manvishah2003:manvijaan1702.@cluster0.rw2yfnp.mongodb.net/?retryWrites=true&w=majority";
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
  const User = new user({ username, password }); // Use the user model from the userdetails module
  const uname = await user.findOne({ username });

  if (!uname) {
    User.save()
      .then(() => {
        console.log('User added');
        return res.json({ msg: 'User registered successfully' });
      })
      .catch((e) => {
        console.log('Error adding a user ', e);
        return res.status(500).json({ msg: 'Internal server error' });
      });
  } else {
    console.log('User already exists');
    return res.status(502).json({ msg: 'User already exists' });
  }
});

// Route handler for user login (/login)
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
 
  try {
    const userObj = await user.findOne({ username });
    if (!userObj || userObj.password !== password) {
      return res.status(401).json({ msg: 'Invalid credentials //' });
    }

    return res.json({ msg: 'Successfully signed in' });
  } catch (error) {
    console.error('Error signing in:', error);
    return res.status(500).json({ msg: 'Internal server error' });
  }
});

// ... (Start the server and other necessary code)

app.listen(5000, () => {
  console.log('Server started on http://localhost:5000');
});