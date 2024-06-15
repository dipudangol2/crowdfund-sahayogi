import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import { User } from "./models/user.js";
import { Campaign } from "./models/campaign.js";
import bodyParser from "body-parser";
import multer from "multer";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 5000;

// Set up Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Specify the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Ensure proper handling of async operations
(async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/users");
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
})();

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join( __dirname , 'uploads')));


app.get("/", (req, res) => {
  res.send("helloo");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email, password: password });
    console.log(user);
    if (user) {
      res.json({ success: true });
    } else {
      res.json({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.post("/signup", async (req, res) => {
  console.log(req.body);
  try {
    const newUser = new User(req.body);
    await newUser.save();
    console.log("User saved:", newUser);
    res.json({ success: true, message: "User registered successfully" });
  } catch (err) {
    console.error("Error during signup: " + err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      errcode: err.code,
    });
  }
});

app.post("/api/campaigns/create", upload.single('image'), async (req, res) => {
  const { userName, campaignName, description, goal } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

  if (!campaignName || !description || !goal || !imageUrl) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  try {
    const newCampaign = new Campaign({
      userName,
      campaignName,
      description,
      goal,
      imageUrl,
    });

    await newCampaign.save();

    res.status(201).json({ success: true, message: 'Campaign created successfully' });
  } catch (error) {
    console.error("Error creating campaign:", error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.get('/api/campaigns', async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.json(campaigns);
    console.log(campaigns)
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
