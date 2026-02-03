const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Use your existing Mongo URI from your .env file
const MONGO_URI = process.env.MONGO_URI;

const createAdmin = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB...");

    // 1. Choose your credentials here!
    const adminEmail = "missiongamer15@gmail.com"; 
    const adminPassword = "1234"; // Change this!

    // 2. Hash the password
    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    // 3. Define the User Schema (matching your server.js)
    const User = mongoose.model('User', new mongoose.Schema({
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      role: { type: String, default: 'admin' }
    }));

    // 4. Create the admin
    await User.create({
      email: adminEmail,
      password: hashedPassword,
      role: "admin"
    });

    console.log("-----------------------------------");
    console.log("SUCCESS: Admin account created!");
    console.log(`Email: ${adminEmail}`);
    console.log(`Password: ${adminPassword}`);
    console.log("-----------------------------------");
    
    process.exit();
  } catch (err) {
    console.error("Error creating admin:", err.message);
    process.exit(1);
  }
};

createAdmin();