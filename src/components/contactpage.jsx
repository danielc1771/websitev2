import React, { Component } from "react";

class ContactPage extends Component {
  state = {};
  render() {
    return (
      <section id="contact" data-aos="fade" data-aos-duration="2000">
        <br />
        <div className="row">
          <div className="col-lg-12 m-auto">
            <h1 className="contact-title">Thanks for checking out my site!</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 m-auto">
            <p className="contact-descrip">
              I'd love to connect, send me an e-mail or connect with me on
              LinkedIn or Github.
            </p>
          </div>
        </div>
        <div className="row">
          <div id="contact-email-btn" className="col-lg-8 m-auto">
            <a href="mailto:daniel.castro1771@gmail.com">
              <button className="btn btn-outline-primary">
                Send a message
              </button>
            </a>
          </div>
        </div>

        <div className="row contact-icons">
          <div className="col-xs-2 m-auto">
            <a href="https://github.com/danielc1771/" target="_blank">
              {" "}
              <i className="fab fa-4x fa-github home-icon" />
            </a>
            <a href="https://www.linkedin.com/in/danielc1771/" target="_blank">
              <i className="fab fa-4x fa-linkedin home-icon" />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactPage;
