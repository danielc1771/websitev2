import React, { Component } from "react";
class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects1: [
        {
          title: "PixMap",
          technologies: "Node.js AngularJS Express MongoDB",
          description:
            "An application designed to allow users to create and share photos based on their location with friends.",
          url: "http://pix-map.herokuapp.com/",
          git: "https://github.com/TheGreatFive/website",
          link: "Link",
          code: "Code"
        },
        {
          title: "Dimension",
          technologies: "C# Unity",
          description:
            "An 3D-Platformer game where player must defeat alien invaders in order to rescue family.",
          url: "",
          git: "https://github.com/danielc1771/dimension",
          link: "Code",
          code: ""
        },
        {
          title: "Java Quiz App",
          technologies: "Java Socket-Programming",
          description:
            "A quiz application where client connects to server and retrieves questions from local database.",
          url: "",
          git: "https://github.com/danielc1771/Java-Quiz-App",
          link: "Code",
          code: ""
        }
      ],
      projects2: [
        {
          title: "AIDots",
          technologies: "Java  Processing",
          description:
            "A simulation where dots must iterate through several generations in order to reach the goal.",
          url: "projects/AIDots/AIDots.html",
          git: "https://github.com/danielc1771/AI-Dots",
          link: "Link",
          code: "Code"
        },
        {
          title: "Virtual Joystick Driver",
          technologies: "C Linux libusb",
          description:
            "Used lib-usb library to create a drive that controls a virtual joystick in a Linux environment.",
          url: "",
          git: "https://github.com/danielc1771/Virtual-Joystick-Driver",
          link: "Code",
          code: ""
        },
        {
          title: "RGB Color Game",
          technologies: "JavaScript HTML CSS",
          description:
            "A game created to help users recognize colors based on their RGB value. Provides 3 modes of difficulty.",
          url: "projects/colorGame/colorGame.html",
          git: "https://github.com/danielc1771/colorGame",
          link: "Link",
          code: "Code"
        }
      ]
    };
  }

  render() {
    return (
      <section data-aos="fade-left" data-aos-duration="2000" id="projects">
        <h1 className="projects-title">Projects I've Worked On</h1>
        <br />
        <br />
        <div className="row">
          {this.state.projects1.map(project => (
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {project.technologies}
                  </h6>
                  <p className="card-text">{project.description}</p>
                  <a href={project.url} target="_blank" className="card-link">
                    {project.link}
                  </a>
                  <a href={project.git} target="_blank" className="card-link">
                    {project.code}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
        <div className="row">
          {this.state.projects2.map(project => (
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {project.technologies}
                  </h6>
                  <p className="card-text">{project.description}</p>
                  <a href={project.url} target="_blank" className="card-link">
                    {project.link}
                  </a>
                  <a href={project.git} target="_blank" className="card-link">
                    {project.code}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
      </section>
    );
  }
}

export default ProjectPage;
