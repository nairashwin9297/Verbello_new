import React, { useState,useEffect } from "react";
import Navbar from "../common/Navbar/Navbar";
import IntroCard from "../IntroCard/IntroCard";
import "./Home.css";
import Carousel from "../Carousel/Carousel";
import Footer from "../common/Footer/Footer";
import Userprofile from "../UserProfile/Userprofile";
import axios from 'axios'

const Home = () => {
  
const [userData,setUserData]=useState({})
  
  const offerings = [
    { language: "French", img: "./images/flags/france.jpeg" },
    { language: "German", img: "./images/flags/germany.jpeg" },
    { language: "Spanish", img: "./images/flags/spain.jpeg" },
    { language: "Portuguese", img: "./images/flags/portugal.jpeg" },
    { language: "Italian", img: "./images/flags/italy.jpeg" },
  ];

  const [userFullName, setUserFullName] = useState(
    window.sessionStorage.getItem("userFullName")
  );



  useEffect(() => {
    console.log(window.sessionStorage.getItem("userId"), "Check");
    let _id=window.sessionStorage.getItem("userId")
    let fetchData = async () => {
      try{
      let result = await axios.get("http://localhost:2000/api/users/userdata", {
        params: {
          _id
        },
      });
      let userDatatemp=result.data.data
      console.log(userDatatemp)
      setUserData(userDatatemp)
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

  return (
    <>
      <Navbar />
      {userFullName ? (
        <Userprofile userData={userData}/>
      ) : (
        <>
          <IntroCard />
          <div className="card languages-offered m-3 p-3">
            <div className="card-body">
              <h3 className="card-title custom-header pb-4">
                Languages we offer
              </h3>
              <div className="card-group">
                {offerings.map((offering, index) => (
                  <div className="card card-language border-0 p-3" key={index}>
                    <img
                      src={offering.img}
                      className="card-img-top country"
                      alt={offering.language}
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center language-name">
                        {offering.language}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Carousel />
        </>
      )}

      <Footer />
    </>
  );
};

export default Home;
