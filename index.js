//Uses import syntax to get express package. Had to change type to module in package.json
import express from "express";
//Create app constant that initializes express
const app = express();
//Define and save port number as a variable. Localhost connects in to this number
const port = 3000;

//Tap in to express, handle a get method to the specified route
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// req/res user request and server response, respectively, passed in as arguments for an anonymous function, represented by fat arrow notation
//Sends a response back to client

//Lets us know our server is running
app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});
