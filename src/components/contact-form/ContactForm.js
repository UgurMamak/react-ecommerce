import React, { Component } from "react";

class ContactForm extends Component {
  render() {
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
                <label>
                  Name<span>*</span>
                </label>
                <input className="form-control" type="text" />
              </div>
              <div className="form-group">
                <label>
                  Email<span>*</span>
                </label>
                <input className="form-control" type="email" />
              </div>
              <div className="form-group">
                <label>
                  Your message<span>*</span>
                </label>
                <textarea className="form-control" rows={4} defaultValue={""} />
              </div>
              <div className="form-group text-center">
                <button className="ps-btn">
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
