const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController.js");

// Create student
router.post("/create", studentController.createuser);

// Get all students
router.get("/get", async (req, res) => {
  try {
    const students = await require("../model/studentModel").find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update student
router.put("/update/:id", studentController.updateStudent);

// Delete student
router.delete("/delete/:id", studentController.deleteStudent);

module.exports = router;
