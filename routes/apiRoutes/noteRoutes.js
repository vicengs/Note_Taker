/* ---------------------------------- */
/* Project  : Note Taker              */
/* File     : apiRoutes/noteRoutes.js */
/* Author   : Vicente Garcia          */
/* Date     : 04/16/2022              */
/* Modified : 04/17/2022              */
/* ---------------------------------- */
// Add router method to use here
const router = require("express").Router();
// Get functions from library folder the notes file (notes.js)
const { filterByQuery, findById, createNewNote, deleteNote, validateNote } = require("../../lib/notes");
// Get database (db.json file) from data folder
const { notes } = require("../../data/db");
// Server method to get data (api) by query (tittle or text), call to javascript function in library
router.get("/notes", (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    };
    res.json(results);
});
// Server method to get data (api) by id, return a unique value, call to javascript function in library
router.get("/notes/:id", (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    };
});
// Server method to create (post) data, call javascript functions in library
router.post("/notes", (req, res) => {
    // Set new id from maximum id plus 1 to avoid duplicity and reconstruct id's too when data is deleted 
    let maxId = 0;
    for (let i=0; i<notes.length; i++){
        if (parseInt(notes[i].id) >= maxId){
            maxId = parseInt(notes[i].id) + 1;
        };
    };
    req.body.id = maxId.toString();
    // If no error when validation then call function to create new note in file (db.json)
    if (!validateNote(req.body)) {
        res.status(400).send("The task is not properly formatted.");
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    };
});
// Server method to delete notes by id (icon position clicked), call to javascript function in library
router.delete("/notes/:id", (req, res) => {
    const suprNote = deleteNote(req.params.id, notes);
    res.json(suprNote);
});
// Export router methods
module.exports = router;