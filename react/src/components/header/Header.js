import React from "react";

import axios from "axios";
import Cart from "./cart";
import SearchForm from "./SearchForm";
import MainMenu from "./MainMenu";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basket: null,
    };
  }

  componentDidMount() {
    axios
      .get(`${window.location.origin}/dummy/basket/basket.json`)
      .then((res) => {
        const basket = res.data;
        this.setState({
          basket,
        });
      })
      .catch((err) => {});
  }

  render() {
    const { basket } = this.state;
    return (
      <div>
        <div className="header--sidebar" />
        <header className="header">
          <div className="header__top">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-6 col-xs-12 ">
                  <p>
                    460 West 34th Street, 15th floor, New York - Hotline:
                    804-377-3580 - 804-399-3580
                  </p>
                </div>
                <div className="col-lg-6 col-md-4 col-sm-6 col-xs-12 ">
                  <div className="header__actions">
                    <a href="index.html">Login &amp; Regiser</a>
                    <div className="btn-group ps-dropdown">
                      <a
                        className="dropdown-toggle"
                        href="index.html"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        USD
                        <i className="fa fa-angle-down" />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="index.html">
                            <img
                              src="skytheme-ecommerce-html5-template/template/images/flag/usa.svg"
                              alt=""
                            />{" "}
                            USD
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <img
                              src="skytheme-ecommerce-html5-template/template/images/flag/singapore.svg"
                              alt=""
                            />{" "}
                            SGD
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <img
                              src="skytheme-ecommerce-html5-template/template/images/flag/japan.svg"
                              alt=""
                            />{" "}
                            JPN
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="btn-group ps-dropdown">
                      <a
                        className="dropdown-toggle"
                        href="index.html"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Language
                        <i className="fa fa-angle-down" />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="index.html">English</a>
                        </li>
                        <li>
                          <a href="index.html">Japanese</a>
                        </li>
                        <li>
                          <a href="index.html">Chinese</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="navigation">
            <div className="container-fluid">
              <div className="navigation__column left">
                <div className="header__logo">
                  <a className="ps-logo" href="index.html">
                    <img
                      src="skytheme-ecommerce-html5-template/template/images/logo.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="navigation__column center">
                <MainMenu />
              </div>
              <div className="navigation__column right">
                <SearchForm />
                <Cart basket={basket} />
                <div className="menu-toggle">
                  <span />
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
