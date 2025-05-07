//requirements
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const axios = require("axios");

// Load environment variables from .env file
require("dotenv").config();

// Connect to MongoDB using Mongoose
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Gamma ray bust!" });
});

app.get("/api/repos", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.github.com/users/GauravVerdhanMaheshwari/repos",
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      }
    );
    console.log("GitHub Token:", process.env.GITHUB_API_KEY);
    res.json(response.data);
  } catch (error) {
    console.error("❌ GitHub API error:", error.message);
    res.status(500).json({ error: "Failed to fetch GitHub repos" });
  }
});

//Server setup
const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
