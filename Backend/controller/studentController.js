const studentModel = require("../model/studentModel.js"); // ✅ correct path and filename

// create a student id
exports.createuser = async (req, res) => {
  try {
    const { fullname, email, mobile_no, college_name } = req.body;

    // Validation
    if (!fullname) {
      return res.status(400).json({ message: "Fullname is required" });
    }
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    if (!mobile_no) {
      return res.status(400).json({ message: "Mobile number is required" });
    }
    if (!college_name) {
      return res.status(400).json({ message: "College name is required" });
    }

    // Save to DB
    const newStudent = new studentModel({
      fullname,
      email,
      mobile_no,
      college_name,
    });

    const savedStudent = await newStudent.save();

    res
      .status(201)
      .json({ message: "Student created successfully", data: savedStudent });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "INTERNAL SERVER ERROR" });
  }
};

// get a student detail

exports.getUser = async (req, res) => {
  try {
    const allDetails = await studentModel.find();
    res.status(200).json(allDetails);
    console.log(allDetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "INTERNAL SERVER ERROR" });
  }
};

// update

exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedStudent = await studentModel.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student updated", data: updatedStudent });
  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({ error: "INTERNAL SERVER ERROR" });
  }
};

// delete

exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedStudent = await studentModel.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ error: "INTERNAL SERVER ERROR" });
  }
};
