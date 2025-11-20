const express = require("express");
const router = express.Router();
const { submitStudentQuery } = require("../controllers/studentQueryController");

router.post("/student-query", submitStudentQuery);

module.exports = router;
