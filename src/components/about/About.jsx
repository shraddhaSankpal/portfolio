import React from "react";
import "./about.css";
import ME from "../../assets/shraddha.jpg";
import { FaAward } from "react-icons/fa";
import {HiUsers} from "react-icons/hi";
import {AiFillProject} from "react-icons/ai";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>Aboute Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon"/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about_card">
              <HiUsers className="about_icon"/>
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>
            <article className="about_card">
             <AiFillProject className="about_icon"/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p className="about_desc">
          Over 6 years of experience in web development with a strong background in JavaScript and the React. I have experience in various aspects of web development, including requirement gathering, analysis, design, development, and integration of wireframes and web modules. I have a strong understanding of the SDLC process and both Agile and Waterfall methodologies, as well as experience in leading teams and coordinating with multiple teams for project development.

My technical skills include React, REST, Redux, HTML/HTML5, CSS/CSS3, SASS, Javascript, Git, and PHP. I have worked with MySQL database systems and have experience in parsing Data APIs such as Restful API.
          </p>
          <div className="about_btn">
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
