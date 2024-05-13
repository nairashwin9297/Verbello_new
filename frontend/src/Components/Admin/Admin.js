import React, { useState,useEffect } from "react";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import "./Admin.css";
import axios from 'axios'

const userData = [
    { id: 1, name: "Michael Johnson", email: "michael@example.com", coursesEnrolled: 3, isEnabled: true },
    { id: 2, name: "Emma Davis", email: "emma@example.com", coursesEnrolled: 2, isEnabled: false },
    { id: 3, name: "Christopher Brown", email: "chris@example.com", coursesEnrolled: 4, isEnabled: true },
    { id: 4, name: "Olivia Smith", email: "olivia@example.com", coursesEnrolled: 1, isEnabled: true },
    { id: 5, name: "Daniel White", email: "daniel@example.com", coursesEnrolled: 2, isEnabled: false },
    { id: 6, name: "Sophia Green", email: "sophia@example.com", coursesEnrolled: 3, isEnabled: true },
    { id: 7, name: "William Miller", email: "william@example.com", coursesEnrolled: 0, isEnabled: false },
  ];

const Admin = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [userData1, setUserData1] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);


  useEffect(() => {
    
    let fetchData = async () => {
      try{
      let result = await axios.get("http://localhost:2000/api/users/getAllUsers", );
      let userDatatemp=result.data.data;
      console.log(userDatatemp,"ALL data")
      setUserData1(userDatatemp)
    }catch(e){
      console.log(e)
    }
      // console.log(result.data, "Data");
      // let quizData = transformQuizData(result.data.data);
      // console.log(quizData, "QuizData");
      // setQuestions(quizData);
    };

    fetchData();
  }, []);


  const handleSearch = () => {
    const filtered = userData1.filter(
      (user) =>
        user._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  useEffect(() => {
    // Use filteredUsers to populate the table when searchTerm changes
    setFilteredUsers(userData1);
  }, [userData1]);


  const handleToggle = (userId) => {
    // Implement toggle logic here
    // Update user's isEnabled property in filteredUsers
  };

  return (
    <div className="admin-wrapper">
      <Navbar />
      <div className="admin-content">
        <h2 className="admin-heading">User Management</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by ID or Username"
            value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button className="search-button"onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="admin-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Courses Enrolled</th>
            
              </tr>
            </thead>
            <tbody>
            {filteredUsers.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{user.courses.length}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
