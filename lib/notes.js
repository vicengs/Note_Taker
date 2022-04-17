/* ------------------------- */
/* Project  : Note Taker     */
/* File     : lib/notes.js   */
/* Author   : Vicente Garcia */
/* Date     : 04/16/2022     */
/* Modified : 04/17/2022     */
/* ------------------------- */
// Add access to file manager methods
const fs = require("fs");
// Add access to path method
const path = require("path");
// Function to get data by query (title or text)
function filterByQuery(query, notesArray) {
    // Note that we save the notesArray as filteredResults here:
    let filteredResults = notesArray;
    // Filter by note title
    if (query.title) {
      filteredResults = filteredResults.filter(note => note.title === query.title);
    };
    // Filter by note text
    if (query.text) {
      filteredResults = filteredResults.filter(note => note.text === query.text);
    };
    // Return the filtered data
    return filteredResults;
};
// Function to search a value by unique id
function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
};
// Function to create new note
function createNewNote(body, notesArray) {
    // Body is the new data (note - title, text and id)
    const note = body;
    // Add (push) the body (note - new note) to array
    notesArray.push(note);
    // Method to overwrite the new file (array) with the new note
    fs.writeFileSync(
      path.join(__dirname, "../data/db.json"),
      JSON.stringify({ notes: notesArray }, null, 2)
    );
    // Return data added
    return note;
};
// Function to delete note
function deleteNote(id, notesArray){
    // Check index where math the id with id sent to delete and delete (split) from array
    let suprNote;
    for (let i=0; i<notesArray.length; i++){
        if (id === notesArray[i].id){
            suprNote = notesArray.splice(i, 1);
        };
    };
    // Method to overwrite the new file (array) without data (note) deleted
    fs.writeFileSync(
        path.join(__dirname, "../data/db.json"),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    // Return data deleted
    return suprNote;
};
// Function to validate a valid type (string) in fields
function validateNote(note) {
    if (!note.title || typeof note.title !== "string") {
      return false;
    };
    if (!note.text || typeof note.text !== "string") {
      return false;
    };
    return true;
};
// Export functions
module.exports = {
    filterByQuery,
    findById,
    createNewNote,
    deleteNote,
    validateNote
};