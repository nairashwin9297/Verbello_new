import React from "react";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import "./OurTeam.css";

const teamMembers = [
  {
    id: 1,
    name: "Navneet Joshi",
    email: "joshi.nav@northeastern.edu",
    imgSrc: "/images/team/navneet.jpg",
  },
  {
    id: 2,
    name: "Ashwin Nair",
    email: "nair.ashw@northeastern.edu",
    imgSrc: "/images/team/ashwin.jpg",
  },
  {
    id: 3,
    name: "Vaishnavi Choukwale",
    email: "choukwale.v@northeastern.edu",
    imgSrc: "/images/team/vaishnavi.jpg",
  },
  {
    id: 4,
    name: "Aum Patel",
    email: "patel.au@northeastern.edu",
    imgSrc: "/images/team/aum.jpg",
  },
];

const OurTeam = () => {
  return (
    <div className="our-team-wrapper">
      <Navbar />
      <div className="our-team-content">
        <h2 className="team-heading">Meet Our Team</h2>
        <div className="team-members">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member">
              <img src={member.imgSrc} alt={member.name} className="member-image" />
              <div className="member-details">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-email">{member.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurTeam;
