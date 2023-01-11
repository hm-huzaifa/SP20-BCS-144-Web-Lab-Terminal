const connectToMongo = require("./database");
const express = require("express");
var cors = require("cors");

connectToMongo();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Available Routes
app.use("/api/posts", require("./routes/posts"));

app.get("/", (req, res) => {
  res.send("Hello Huz!");
});

app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`);
});
