import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginValid, setIsLoginValid] = useState(true);

  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userId = window.sessionStorage.getItem("userId");
    if (userId != null) {
      navigate(window.location.origin);
    }
  }, []);

  // useEffect(()=>{
  //   const storedUserData = sessionStorage.getItem("user");
  //   setUser(JSON.parse(storedUserData));
  //   console.log(JSON.parse(storedUserData),"user")
  // },[])

  const validateEmail = (email) => {
    // Perform email validation logic (e.g., basic format check)
    // Return true if email is valid, false otherwise
    return /\S+@\S+\.\S+/.test(email);
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
    setIsLoading(true);

    setIsEmailValid(validateEmail(email));
    setIsPasswordValid(!!password);
    if (isEmailValid && isPasswordValid) {
      // Perform signup logic
      console.log("Lets go");

      try {
        const response = await fetch("http://localhost:2000/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
      console.log(data);
        if (response.ok) {
          //  alert(data.message);
          if (data.user) {
            window.sessionStorage.setItem("userId", data.user._id);
            window.sessionStorage.setItem("userFullName", data.user.fullName);
          }
          if(data.user.role === "admin") {
            navigate("/admin");
          } else {
            navigate("/");
          }
          
        } else {
          // alert(`Login failed: ${data.message}`);
          console.log("Failed");
        }
      } catch (error) {
        console.error("Error during login:", error);
        alert("An error occurred during login.");
      }
    } else {
      // Display an error message or prevent form submission
    }
    setIsLoading(false);
  };

  const checkApi = async () => {
    console.log("Inside");
    let response;

    try {
      response = await fetch("http://localhost:2000/api/qna/check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
    } catch (e) {
      console.error(e, "ERR");
    }

    console.log(response, "RES");
  };

  const checklogout = async () => {
    console.log("Inside");
    let response;

    try {
      response = await fetch("http://localhost:2000/api/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
    } catch (e) {
      console.error(e, "ERR");
    }

    console.log(response, "RES");
  };
  return (
    <div className="login-container">
      <div className="container d-flex align-items-center justify-content-center vh-100">
        <div className="card p-4 login-card">
          <h1 className="card-title text-center mb-4">Login</h1>
          {!isLoginValid && (
            <h4 className="text-center text-danger">Invalid Credentials!</h4>
          )}
          <form>
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
                <p className="text-danger">Invalid email format</p>
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
                <p className="text-danger">Password field is mandatory!</p>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-success w-100 mb-3"
              onClick={(e) => handleSubmit(e)}
            >
              {isLoading ? (
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Login"
              )}
            </button>
            <p className="text-center mt-3">
              Not a member? <a href="/signup">Signup</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
