/* ------------------------- */
/* Project  : Note Taker     */
/* File     : server.js      */
/* Author   : Vicente Garcia */
/* Date     : 04/15/2022     */
/* Modified : 04/15/2022     */
/* ------------------------- */
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
// parse incoming string or array data
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});