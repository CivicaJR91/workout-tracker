const express = require("express");
const mongoose = require("mongoose");

//Stablishing Port
const PORT = process.env.PORT || 3000;

//Using Express App
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});


// routes
app.use(require("./routes/html.js"));
app.use(require("./routes/api.js")); 


// Connecting to Server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});