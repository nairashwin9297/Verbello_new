// Userprofile.jsx

import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import golden from "../../assets/images/Badges/gold.jpeg";
import silver from "../../assets/images/Badges/silve.jpeg";
import bronze from "../../assets/images/Badges/bronz.jpeg";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from 'react-router-dom';




import "./UserProfile.css"; // Import the CSS file for user profile styling

function Userprofile(props) {
  const navigate = useNavigate();
  const languageMap = [
    {
      language: "French",
      imageUrl: "./images/flags/france.jpeg",
      isActive: true,
      completion: 60,
    },
    {
      language: "Spanish",
      imageUrl: "./images/flags/spain.jpeg",
      isActive: true,
      completion: 40,
    },
    {
      language: "German",
      imageUrl: "./images/flags/germany.jpeg",
      isActive: false,
      completion: 80,
    },
    {
      language: "Italian",
      imageUrl: "./images/flags/italy.jpeg",
      isActive: false,
      completion: 10,
    },
    {
      language: "Portugese",
      imageUrl: "./images/flags/portugal.jpeg",
      isActive: false,
      completion: 30,
    },
  ];

  console.log(props?.userData?.courses,'PROPS')
  const updatedLanguageMap = languageMap.map((value) => {
    return {
      language: value.language,
      imageUrl: value.imageUrl,
      isActive: props?.userData?.courses?.some(
        (item) => item.language === value.language
      ),
      completion:
        props?.userData?.courses?.find((item) => item.language === value.language)
          ?.lessonsCompleted || 0,
    };
  });

  console.log(updatedLanguageMap,'MAPPPPP')

  const [courses, setCourses] = useState(updatedLanguageMap);
  console.log(updatedLanguageMap.filter((course) => course.isActive),'FILTER')
  useEffect(() => {
    // Update the courses state after the component has mounted
    setCourses(updatedLanguageMap);
  }, [props.userData]);

  // const activeCourses = updatedLanguageMap.filter((course) => course.isActive);
  // const inactiveCourses = updatedLanguageMap.filter((course) => !course.isActive);

  const enrollCourse = async (course) => {
    try {
      await axios.post("http://localhost:2000/api/users/enroll", {
        _id: window.sessionStorage.getItem("userId"),
        language: course.language,
      });
  
      setCourses((prevCourses) =>
        prevCourses.map((c) =>
          c.language === course.language
            ? { ...c, isActive: true, completion: 0 }
            : c
        )
      );
    } catch (e) {
      console.log(e);
    }
  };

  const Resume=(course)=>{
    console.log(course,'RESUM')
    let courseMap=["Colors","Fruits","Vegetables","Birds","Animals","Tenses","Articles","Adjectives","Preposition","Simple Sentences","Complex Sentences","Real World Conversations"]
    let lessonname=courseMap[course.completion]
    navigate(`/lesson/${course.language}/${lessonname}`)
  }
  const ViewAll=(course)=>{
    console.log(course,'RESUM')
    let courseMap=["Colors","Fruits","Vegetables","Birds","Animals","Tenses","Articles","Adjectives","Preposition","Simple Sentences","Complex Sentences","Real World Conversations"]
    let lessonname=courseMap[course.completion]
    navigate(`/lesson/${course.language}`)
  }
  
  

  return (
    <>
    <div className="active-in">
      <div className="active-courses">
        {courses.some((course) => course.isActive) && (
          <>
            <h3>Your Active Courses</h3>
            <div className="card-container">
              {courses
                .filter((course) => course.isActive)
                .map((course, index) => (
                  <Card key={index} className="mb-3">
                    <div className="active-card">
                      <div>
                        <Card.Body>
                          <Card.Title>{course.language}</Card.Title>
                          <Card.Img
                            className="card-im"
                            variant="top"
                            src={course.imageUrl}
                            alt={`${course.language} flag`}
                          />
                        </Card.Body>
                      </div>
                      <div className="progress-container">
                        <div>
                          Current Progress
                          <ProgressBar
                            now={(course.completion * 100) / 12}
                            label={`${parseInt(
                              (course.completion * 100) / 12
                            )}%`}
                          />
                        </div>
                        <div>
                          <div>Badges that you have earned</div>
                          <div className="badges">
                            { (course.completion * 100) / 12 > 75 && (
                              <img
                                className="badg"
                                src={golden}
                                alt="Golden Badge"
                              />
                            )}
                            { (course.completion * 100) / 12 > 25 && (
                              <img
                                className="badg"
                                src={silver}
                                alt="Silver Badge"
                              />
                            )}
                           { (course.completion * 100) / 12 > 5 && (
                        <img className="badg" src={bronze} alt="Bronze Badge" />
                      )}
                       {(course.completion * 100) / 12 <= 5 && (
                <span>You didn't earn any badges yet.</span>
              )}


                          </div>
                          {course.completion < 100 && (
                            // Show the button if completion is less than 100%
                            <div className="resume-button">
                              <button onClick={() => Resume(course)} className="mx-2">
                                Resume Lesson
                              </button>
                              <button onClick={() => ViewAll(course)} >
                                View All Lessons
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </>
        )}
        {/* Inactive courses section */}
        <div className="inactive-courses">
          <h3>Enroll in New Courses</h3>
  
          <div className="card-container">
            {courses
              .filter((course) => !course.isActive)
              .map((course, index) => (
                <Card key={index} style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{course.language}</Card.Title>
                    <div className="round-image">
                      <Card.Img
                        variant="top"
                        src={course.imageUrl}
                        alt={`${course.language} flag`}
                      />
                    </div>
                    <Button
                      variant="success"
                      onClick={() => enrollCourse(course)}
                    >
                      Enroll
                    </Button>
                  </Card.Body>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  </>
  
  );
}

export default Userprofile;
