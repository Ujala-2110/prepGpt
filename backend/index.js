const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config();
const app = express()
const port = 5000

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

//cors
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
  
app.use(express.json());

app.use('/api', require("./Routes/quesans"))
app.use('/api', require("./Routes/createUser"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})