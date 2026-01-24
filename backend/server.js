const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' })); 
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

// Create Part Schema
const partSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  image: String, // Base64 string or URL
  createdAt: { type: Date, default: Date.now }
});

const Part = mongoose.model('Part', partSchema);

// API Route to get all parts
app.get('/api/parts', async (req, res) => {
  const parts = await Part.find().sort({ createdAt: -1 });
  res.json(parts);
});

// API Route to add a new part
app.post('/api/parts', async (req, res) => {
  const newPart = new Part(req.body);
  await newPart.save();
  res.json(newPart);
});

app.listen(5000, () => console.log("Server running on port 5000"));