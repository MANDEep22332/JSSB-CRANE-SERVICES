const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const allowedOrigins = [
  "http://localhost:5173", // For local development
  "https://jssb-crane-service.onrender.com" // Your LIVE Render URL
];

const app = express();
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
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

app.listen(PORT, () => console.log("Server running on port 5000"));