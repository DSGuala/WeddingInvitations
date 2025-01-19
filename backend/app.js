const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// remove this when deploying
const cors = require('cors');
const { parse } = require('json2csv');  // json2csv to convert JSON to CSV
const fs = require('fs');  // File system module to handle file streams
const path = require('path');

app.use(bodyParser.json());
// remove this when deploying
app.use(cors({origin: 'http://localhost:8000'}));

require('dotenv').config();

const dbConnect = process.env.DB_LINK;

console.log('Database password:', dbConnect);

mongoose.connect(dbConnect, {
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

const AnySchema = new mongoose.Schema({}, {strict:false});

const Replies = mongoose.model('Replies', AnySchema);

// User.find()
//   .then(users => console.log(users))
//   .catch(err => console.error(err));

// use('sample_mflix');

// const hasNameCount = db.getCollection('users').find({
//   name: { $exists: true }
// }).count();

// console.log(hasNameCount);

app.get('/', (req, res) => {
  res.send('Este es el backend. Esta activo.');
});

app.post("/", async (req, res) => {
  res.send(req.body);
  console.log('received data', req.body);
  console.log('sending data to database');
  Replies.create(
    { 'name': req.body.name, 'email':req.body.email, 'message':req.body.message, 'transporte':req.body.transporte, 'confirmacion':req.body.confirmacion});
});

app.get("/descargar", async (req, res) => {
  try {
    // Retrieve the data from MongoDB
    const replies = await Replies.find({});  // You can filter or adjust as necessary

    // Convert the JSON data into CSV format
    const csv = parse(replies);

    // Set the response headers to indicate that the response is a file download
    res.header('Content-Type', 'text/csv');
    res.attachment('users.csv');  // Suggests a filename for the download

    // Send the CSV data as the response
    res.send(csv);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => console.log("Server running on port 8080"));