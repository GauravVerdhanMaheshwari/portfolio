const express = require("express");
const cors = require("cors");
const url = `mongodb+srv://Gaurav:ZiC31mUty7lx7eKZ@portfolio.xtrytid.mongodb.net/?retryWrites=true&w=majority&appName=Portfolio`;
const app = express();
app.use(cors()); // Allow requests from frontend
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Gamma ray bust!" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
