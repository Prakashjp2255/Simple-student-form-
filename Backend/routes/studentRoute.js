const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController");

// POST /admin/create
router.post("/admin/create", studentController.createuser);

// Optional: GET all students
router.get("/admin/get", studentController.getUser);

// Optional: PUT /admin/update/:id
router.put("/admin/update/:id", studentController.updateStudent);

// Optional: DELETE /admin/delete/:id
router.delete("/admin/delete/:id", studentController.deleteStudent);

module.exports = router;
