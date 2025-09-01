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

// GET API to fetch user
app.get('/user', async (req, res) => {
  
  const user = await User.findOne({ name: "Manish" });

  // If user exists, send it; otherwise send a message
  if (user) {
    res.json(user);
  } else {
    res.json({ message: "User not found" });
  }
});


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
