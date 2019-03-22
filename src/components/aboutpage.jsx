import React, { Component } from "react";
import DanielImage from "../images/daniel.JPG";
import Resume from "../images/CastroDanielResume.pdf";
class AboutPage extends Component {
  state = {};
  render() {
    return (
      <section
        id="about"
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <h1 className="section-title" home-title>
          About Me
        </h1>
        <br />
        <br />
        <div className="row">
          <div className="col-lg-6">
            <img className="about-image" src={DanielImage} alt="" />
          </div>
          <div className="col-lg-6 about-text">
            <p className="about-descrip">
              Hello! My name is Daniel Castro and I'm a fourth year student
              pursuing a degree in{" "}
              <span className="about-highlights">Computer Science</span> at the
              <span className="about-highlights"> University of Florida </span>.
              I'm very interested in software development and data science.
            </p>
            <p className="about-descrip">
              When I'm not on the computer I love to explore the outdoors with
              my dog, Troy. I'm also a big fan of sports, mainly basketball and
              football!
            </p>
            <h2 id="about-skills-title">Technologies I'm Familiar With</h2>
            <br />
            <div className="row">
              <div className="col-6 about-skills-list">
                <ul className="fa-ul">
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-angle-right" />
                    </span>
                    Java
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-angle-right" />
                    </span>
                    C++
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-angle-right" />
                    </span>
                    JavaScript
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-angle-right" />
                    </span>
                    Python
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-angle-right" />
                    </span>
                    SQL
                  </li>
                </ul>
              </div>
              <div className="col-6 about-skills-list">
                <ul className="fa-ul">
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-angle-right" />
                    </span>
                    React
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-angle-right" />
                    </span>
                    AngularJS
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-angle-right" />
                    </span>
                    Node.js
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-angle-right" />
                    </span>
                    MongoDB
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-angle-right" />
                    </span>
                    Express
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div id="about-resume-btn" className="col-12 m-auto">
            <a href={Resume} target="_blank">
              <button className="btn btn-outline-primary">
                Check out my Resume
              </button>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutPage;
