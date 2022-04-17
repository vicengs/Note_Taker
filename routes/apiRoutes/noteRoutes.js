/* -------------------------- */
/* Project  : Zookeepr        */
/* File     : noteRoutes.js   */
/* Author   : Vicente Garcia  */
/* Date     : 04/16/2022      */
/* Modified : 04/16/2022      */
/* -------------------------- */
const router = require("express").Router();
const { filterByQuery, findById, createNewNote, validateNote } = require("../../lib/notes");
const { notes } = require("../../data/db");
router.get("/notes", (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    };
    res.json(results);
});
router.get("/notes/:id", (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    };
});
router.post("/notes", (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();
    // req.body is where our incoming content will be
    // add animal to json file and animals array in this function
    // if any data in req.body is incorrect, send 400 error back
    if (!validateNote(req.body)) {
        res.status(400).send("The task is not properly formatted.");
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    };
});
module.exports = router;