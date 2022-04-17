/* -------------------------- */
/* Project  : Note Taker      */
/* File     : routes/index.js */
/* Author   : Vicente Garcia  */
/* Date     : 04/16/2022      */
/* Modified : 04/16/2022      */
/* -------------------------- */
const router = require("express").Router();
const noteRoutes = require("../apiRoutes/noteRoutes");
router.use(noteRoutes);
module.exports = router;