/* ------------------------- */
/* Project  : Note Taker     */
/* File     : server.js      */
/* Author   : Vicente Garcia */
/* Date     : 04/15/2022     */
/* Modified : 04/15/2022     */
/* ------------------------- */
// Add access to api routes to use api
const apiRoutes = require("./routes/apiRoutes");
// Add access to html routes to use html page
const htmlRoutes = require("./routes/htmlRoutes");
// Add access to express to connect server
const express = require("express");
// Variable to local or heroku port
const PORT = process.env.PORT || 3001;
// Variable with express methods to use server
const app = express();
// Folder location to web page files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// Parse incoming JSON data
app.use(express.json());
// Call function to get location to api routes
app.use("/api", apiRoutes);
// Call function to get location to html and web page files
app.use("/", htmlRoutes);
// Server listener
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});