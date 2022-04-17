const fs = require("fs");
const path = require("path");
function filterByQuery(query, notesArray) {
    // Note that we save the notesArray as filteredResults here:
    let filteredResults = notesArray;
    if (query.title) {
      filteredResults = filteredResults.filter(note => note.title === query.title);
    };
    if (query.text) {
      filteredResults = filteredResults.filter(note => note.text === query.text);
    };
    // return the filtered results:
    return filteredResults;
};
function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
};
function createNewNote(body, notesArray) {
    // our function's main code will go here!
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, "../data/db.json"),
      JSON.stringify({ notes: notesArray }, null, 2)
    );
    // return finished code to post route for response
    return note;
};
function validateNote(note) {
    if (!note.title || typeof note.title !== "string") {
      return false;
    };
    if (!note.text || typeof note.text !== "string") {
      return false;
    };
    return true;
};
module.exports = {
    filterByQuery,
    findById,
    createNewNote,
    validateNote
};