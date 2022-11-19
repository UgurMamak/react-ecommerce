import React from "react";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="ps-404 bg--cover"
        data-background="skytheme-ecommerce-html5-template/template/images/background/404.jpg"
      >
        <div className="ps-404__content">
          <h1>404</h1>
          <h3>Page not found</h3>
          <p>
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <a className="ps-btn" href="index.html">
            Back to home
            <i className="ps-icon-next" />
          </a>
        </div>
      </div>
    );
  }
}

export default Index;
