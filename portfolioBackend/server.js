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
    res.json(response.data);
  } catch (error) {
    console.error("❌ GitHub API error:", error.message);
    res.status(500).json({ error: "Failed to fetch GitHub repos" });
  }
});

app.get("/api/blogs", async (req, res) => {
  res.json([
    {
      id: 1,
      title: "Coding Journey",
      content: "This is a blog about my coding journey",
      topic: { topic1: "Coding", topic2: "Story" },
      date: "2021-01-01",
      link: "https://www.cineby.app/tv/19885/1/2",
    },
    {
      id: 2,
      title: "React Journey",
      content: "This is a blog about my React journey",
      topic: { topic1: "Coding", topic2: "Story" },
      date: "2021-01-01",
      link: "https://www.cineby.app/tv/19885/1/2",
    },
    {
      id: 3,
      title: "NodeJS Journey",
      content: "This is a blog about my NodeJS journey",
      topic: { topic1: "Coding" },
      date: "2021-01-01",
      link: "https://www.cineby.app/tv/19885/1/2",
    },
    {
      id: 4,
      title: "HTML Journey",
      content: "This is a blog about my HTML journey",
      topic: "Coding",
      date: "2021-01-01",
      link: "https://www.cineby.app/tv/19885/1/2",
    },
  ]);
});

//Server setup
const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
