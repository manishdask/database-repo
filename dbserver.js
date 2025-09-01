const express = require('express');
const mongoose = require('mongoose'); // Connect DB
const app = express();
const PORT = 3000;

app.use(express.json());

const User = mongoose.model('User', new mongoose.Schema({
  name: String,
  age: Number,
  role: String,
  course: String
}));

// post api to add new user
app.post ( '/user' , async (req, res) =>{

const user = new User (req.body);
await user.save();
res.send ("user saved!");
})


// GET user by name
app.get('/users/:name', async (req, res) => {
  
  const user = await User.findOne({ name: "Manish" });

  // If user exists, send it, otherwise send a message
  if (user) {
    res.json(user);
  } else {
    res.json({ message: "User not found" });
  }
});



app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
