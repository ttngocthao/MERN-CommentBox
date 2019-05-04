//server framework
const express = require("express");

//database
const mongoose = require("mongoose");

//get the name of the post from the Post request
const bodyParser = require("body-parser");

//create a instance of server framework
const app = new express();
//connnect app with body-parser
app.use(bodyParser.json());
//get the mongoURL from key.js file
const database = require("./config/keys").mongoURL;
//connect to database, using mongoose, connect method return a promise!!
mongoose
  .connect(database, { useNewUrlParser: true })
  .then(() => console.log("MongoDB is connected"))
  .catch(err => console.log(err));

//get the routes
const commentsApi = require("./routes/api/commentsApi");
//use the routes
app.use("/api/commentsApi", commentsApi);

//define port for server running ( the ...PORT for deploying to Heroku, 5000 for local running)
const port = process.env.PORT || 5000;

//connect app to port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
