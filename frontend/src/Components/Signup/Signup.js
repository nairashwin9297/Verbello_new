import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import axios from "axios";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFullNameValid, setIsFullNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isSignupValid, setIsSignupValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateFullName = (fullName) => {
    // Perform full name validation logic (e.g., length and alphabet/space check)
    // Return true if full name is valid, false otherwise
    return /^[a-zA-Z ]{1,15}$/.test(fullName);
  };

  const validateEmail = (email) => {
    // Perform email validation logic (e.g., basic format check)
    // Return true if email is valid, false otherwise
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePassword = (password) => {
    // Perform password validation logic (e.g., length, uppercase, lowercase, special character check)
    // Return true if password is valid, false otherwise
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  };

  const handleFullNameChange = (e) => {
    setIsFullNameValid(true);
    const inputFullName = e.target.value;
    setFullName(inputFullName);
    // Perform full name validation (e.g., length and alphabet/space check)
  };

  const handleEmailChange = (e) => {
    setIsEmailValid(true);
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    // Perform email validation (e.g., basic format check)
  };

  const handlePasswordChange = (e) => {
    setIsPasswordValid(true);
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    // Perform password validation (e.g., length, uppercase, lowercase, special character check)
  };

  const handleSubmit = async (e) => {
    // Perform final validation and submit the form if everything is valid
    e.preventDefault();
    setIsFullNameValid(validateFullName(fullName));
    setIsEmailValid(validateEmail(email));
    setIsPasswordValid(validatePassword(password));
    console.log(
      validateFullName(fullName),
      validateEmail(email),
      validatePassword(password),
      "VAl"
    );
    if (
      validateFullName(fullName) &&
      validateEmail(email) &&
      validatePassword(password)
    ) {
      // Perform signup logic
      console.log("Lets go");
      setIsLoading(true);
      let response;
      try {
        response = await axios.post("http://localhost:2000/api/users/signup", {
          fullName,
          email,
          password,
        });
      } catch (e) {
        console.log(e, "ERROR");
      }
      console.log(response, "RESS");
      setIsLoading(false);
      if (response.data.status === 200) {
        navigate("/login");
      } else {
        setIsSignupValid(false);
      }
    } else {
      // Display an error message or prevent form submission
    }
  };

  return (
    <div className="signup-container">
      <div
        className="d-flex align-items-center justify-content-center vh-100"
        style={{
          // background: 'url("your-background-image.jpg") center/cover',
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Adjust opacity here
        }}
      >
        <div className="card p-4" style={{ width: "30rem" }}>
          <h1 className="card-title text-center mb-4">Sign Up</h1>
          {!isSignupValid && (
            <h4 className=" text-center m2-4 text-danger">Error Signing Up!</h4>
          )}
          <form>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Full Name<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                placeholder="Enter your full name"
                value={fullName}
                onChange={handleFullNameChange}
              />
              {!isFullNameValid && (
                <p style={{ color: "red" }}>Invalid full name</p>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
              {!isEmailValid && (
                <p style={{ color: "red" }}>Invalid email format</p>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={handlePasswordChange}
              />
              {!isPasswordValid && (
                <p style={{ color: "red" }}>
                  Password must be at least 8 characters with at least one
                  uppercase, one lowercase, and one special character
                </p>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
              onClick={(e) => handleSubmit(e)}
            >
              {isLoading ? (
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Signup"
              )}
            </button>
            <p className="text-center mt-3">
              Already a member? <a href="/login">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
