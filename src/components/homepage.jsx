import React, { Component } from "react";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <div className="row">
          <div className="col-xs-8 m-auto">
            <h1
              data-aos="fade"
              data-aos-duration="2000"
              data-aos-delay="400"
              className="home-title"
            >
              Daniel Castro
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-8 m-auto">
            <h3
              data-aos="fade"
              data-aos-duration="2000"
              data-aos-delay="800"
              className="home-descrip"
            >
              Software Engineer
            </h3>
          </div>
        </div>
        <div
          id="home-icons"
          className="row"
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-delay="1200"
        >
          <div className="col-xs-2 m-auto">
            <a href="https://github.com/danielc1771/" target="_blank">
              {" "}
              <i id="home-git-icon" className="fab fa-2x fa-github home-icon" />
            </a>
            <a href="https://www.linkedin.com/in/danielc1771/" target="_blank">
              <i
                id="home-linkedin-icon"
                className="fab fa-2x fa-linkedin home-icon"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
