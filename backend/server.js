const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken'); // New
const bcrypt = require('bcryptjs');
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
  //user schema 

  const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'viewer' } // 'admin' or 'viewer'
});
const User = mongoose.model('User', userSchema);

// Create Part Schema
const partSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  image: String, // Base64 string or URL
  createdAt: { type: Date, default: Date.now }
});

const Part = mongoose.model('Part', partSchema);

/// middleware for the verify
const verifyAdmin = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ message: "No token provided" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });
    if (decoded.role !== 'admin') return res.status(403).json({ message: "Admin access only" });
    req.userId = decoded.id;
    next();
  });
};

/// login route for the user 
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Check if JWT_SECRET exists
    if (!process.env.JWT_SECRET) {
      console.error("FATAL ERROR: JWT_SECRET is not defined in .env");
      return res.status(500).json({ message: "Server configuration error" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({ token, role: user.role, email: user.email });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});




// API Route to get all parts
app.get('/api/parts', async (req, res) => {
  const parts = await Part.find().sort({ createdAt: -1 });
  res.json(parts);
});

// API Route to add a new part
app.post('/api/parts', verifyAdmin, async (req, res) => {
  try {
    const newPart = new Part(req.body);
    await newPart.save();
    res.json(newPart);
  } catch (err) {
    res.status(500).json({ message: "Error saving part" });
  }
});

app.listen(PORT, () => console.log("Server running on port 5000"));