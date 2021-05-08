const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// use routes
app.use(require("./routes"));

// create connection
mongoose.connect(
  process.env.MONGO_URI || "mongodb://localhost/social-network-api",
  {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Use this to log mongo queries being executed
mongoose.set("debug", true);

app.listen(PORT, () => console.log(`🌎 Connected on localhose:${PORT}`));
