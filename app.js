// const { application } = require("express");
const express = require("express");
const app = express();
const people = require("./routes/people");
const auth = require("./routes/auth");
//static asset
app.use(express.static("./methods-public"));
app.use(express.json());
app.use("/api/people", people);
app.use("/login", auth);
//parse form data
app.use(express.urlencoded({ extended: false }));

app.listen(5000, () => {
  console.log(`Server is Listening at port 5000...`);
});
