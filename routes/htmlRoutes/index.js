/* ------------------------------ */
/* Project  : Zookeepr            */
/* File     : htmlRoutes/index.js */
/* Author   : Vicente Garcia      */
/* Date     : 04/16/2022          */
/* Modified : 04/16/2022          */
/* ------------------------------ */
const path = require("path");
const router = require("express").Router();
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
});
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});
module.exports = router;