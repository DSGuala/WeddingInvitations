const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// remove this when deploying
const cors = require('cors');

app.use(bodyParser.json());
// remove this when deploying
app.use(cors({origin: 'http://localhost:8000'}));

mongoose.connect('mongodb+srv://gualad:Bodaro7!@cluster0.qwwuj.mongodb.net/wedding?retryWrites=true&w=majority&appName=WeddingInvites', {
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
  // The backend server should receive form values. Can we use a schema?
  // What data does this server receive in the request?
  // Name
  // Email
  // Confirmacion
  // Mensaje
  // Edad/Menor
  //    <3?
  // Necesitas traslado desde capital?
  //    seguro que si
  //    no
  //    no estoy seguro
  // const { name, email } = req.body;
  // // Save to database using Mongoose, Prisma, or any database driver
  // res.json(req.body);
  // res.json({ success: true, message: "Data saved!" });
  // res.send(req.body);
  res.send(req.body);
  console.log('received data', req.body);
  console.log('sending data to database');
  Replies.create(
    { 'name': req.body.name, 'email':req.body.email, 'message':req.body.message, 'transporte':req.body.transporte});
});

app.listen(port, () => console.log("Server running on port 8080"));