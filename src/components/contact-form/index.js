import React, { Component } from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  render() {
    const { email, message } = this.state;
    return (
      <>
        <div
          id="contact-map"
          data-address="New York, NY"
          data-title="BAKERY LOCATION!"
          data-zoom={17}
        />
        <div className="ps-home-contact__form">
          <header>
            <h3>Contact Us</h3>
            <p>
              Learn about our company profile, communityimpact, sustainable
              motivation, and more.
            </p>
          </header>
          <footer>
            <form action="product-listing.html" method="post">
              <div className="form-group">
                <label htmlFor="firstName">
                  Name<span>*</span>
                  <input
                    name="firstName"
                    id="firstName"
                    className="form-control"
                    type="text"
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor={email}>
                  Email<span>*</span>
                </label>
                <input className="form-control" id={email} type="email" />
              </div>
              <div className="form-group">
                <label htmlFor={message}>
                  Your message<span>*</span>
                </label>
                <textarea
                  id={message}
                  className="form-control"
                  rows={4}
                  defaultValue=""
                />
              </div>
              <div className="form-group text-center">
                <button type="button" className="ps-btn">
                  Send Message
                  <i className="fa fa-angle-right" />
                </button>
              </div>
            </form>
          </footer>
        </div>
        <a className="fdsfsd" href="dsds" target="_blank">
          test
        </a>
      </>
    );
  }
}

export default ContactForm;
