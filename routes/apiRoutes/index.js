/* ----------------------------- */
/* Project  : Note Taker         */
/* File     : apiRoutes/index.js */
/* Author   : Vicente Garcia     */
/* Date     : 04/16/2022         */
/* Modified : 04/16/2022         */
/* ----------------------------- */
// Declare router method to avoid create each time a new express object and loss the instance
const router = require("express").Router();
// Add access to note routes
const noteRoutes = require("../apiRoutes/noteRoutes");
// Assign note routes to router
router.use(noteRoutes);
// Export added proporties to router
module.exports = router;