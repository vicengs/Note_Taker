/* ------------------------------ */
/* Project  : Note Taker          */
/* File     : htmlRoutes/index.js */
/* Author   : Vicente Garcia      */
/* Date     : 04/16/2022          */
/* Modified : 04/16/2022          */
/* ------------------------------ */
// Add access to path
const path = require("path");
// Declare router method to avoid create each time a new express object and loss the instance
const router = require("express").Router();
// Method to get main page
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});
// Method to get notes page
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
});
// Method to get files from public to work with traditional page structure
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});
// Export router methods added
module.exports = router;