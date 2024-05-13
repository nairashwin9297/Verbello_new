import React from 'react';
import verbelloIntro from '../../assets/gifs/verbello-intro.gif';
import './IntroCard.css';

const IntroCard = () => {
  return (
    <div className="card verbello-intro m-3 p-3">
        <div className="row d-flex align-items-center">
          <div className="col-md-7">
            <img src={verbelloIntro} alt="Animation" className="img-fluid" />
          </div>
          <div className="col-md-5">
            <h1 className="verbello-slogan">
              Your gateway to multilingual mastery.
            </h1>
            <div className="card-body">
              <h5 className="card-text pt-4 pb-4">
                Embarking on a journey to learn a new language is a thrilling
                and rewarding experience. Language opens doors to new cultures,
                people, and opportunities. 
         
              </h5>
              <h5 className="card-title">Start learning a new language today!</h5>
            </div>
          </div>
        </div>
      </div>
  )
}

export default IntroCard
