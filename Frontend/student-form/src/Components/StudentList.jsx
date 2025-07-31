import React, { useState } from "react";
import axios from "axios";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({
    fullname: "",
    email: "",
    mobile_no: "",
    college_name: "",
  });

  // ✅ POST: Create student
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://simple-student-form.onrender.com/admin/create", student);
      setStudent({ fullname: "", email: "", mobile_no: "", college_name: "" });

      // ✅ GET: Fetch after submit
      fetchStudents();
    } catch (error) {
      console.error("Error submitting student", error);
    }
  };

  // ✅ GET: Fetch students
  const fetchStudents = async () => {
    try {
      const res = await axios.get("https://simple-student-form.onrender.com/admin/get");
      setStudents(res.data);
    } catch (error) {
      console.error("Error fetching students", error);
    }
  };

  // ✅ Render form and list
  return (
    <div className="form-container">
      <h2 className="form-title">Add Student</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          className="form-input"
          value={student.fullname}
          onChange={(e) => setStudent({ ...student, fullname: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="form-input"
          value={student.email}
          onChange={(e) => setStudent({ ...student, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Mobile"
          className="form-input"
          value={student.mobile_no}
          onChange={(e) =>
            setStudent({ ...student, mobile_no: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="College"
          className="form-input"
          value={student.college_name}
          onChange={(e) =>
            setStudent({ ...student, college_name: e.target.value })
          }
        />
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>

      {students.length > 0 && (
        <>
          <h2 className="form-title">Student List</h2>
          <ul className="student-list">
            {students.map((stu) => (
              <li key={stu._id} className="student-item">
                {stu.fullname} | {stu.email} | {stu.mobile_no} |{" "}
                {stu.college_name}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default StudentList;
