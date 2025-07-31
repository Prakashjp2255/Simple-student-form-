import React, { useState } from "react";
import axios from "axios";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile_no: "",
    college_name: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/admin/create", formData);
      alert("Student added successfully!");
      setFormData({ fullname: "", email: "", mobile_no: "", college_name: "" });
    } catch (error) {
      alert("Error adding student");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Student</h2>
      <input name="fullname" placeholder="Full Name" value={formData.fullname} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input name="mobile_no" placeholder="Mobile Number" value={formData.mobile_no} onChange={handleChange} required />
      <input name="college_name" placeholder="College Name" value={formData.college_name} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
