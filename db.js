const mongoose = require('mongoose'); 

const MONGO_URL = "mongodb+srv://manishkd120_db_user:manish021@manishapi.bdv2rkw.mongodb.net/mydatabase?retryWrites=true&w=majority";

mongoose.connect(MONGO_URL)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("MongoDB connection error:", err));

