import React from "react";

class FilterMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ps-sidebar" data-mh="product-listing">
        <aside className="ps-widget--sidebar ps-widget--category">
          <div className="ps-widget__header">
            <h3>Category</h3>
          </div>
          <div className="ps-widget__content">
            <ul className="ps-list--checked">
              <li className="current">
                <a href="product-listing.html">Life(521)</a>
              </li>
              <li>
                <a href="product-listing.html">Running(76)</a>
              </li>
              <li>
                <a href="product-listing.html">Baseball(21)</a>
              </li>
              <li>
                <a href="product-listing.html">Football(105)</a>
              </li>
              <li>
                <a href="product-listing.html">Soccer(108)</a>
              </li>
              <li>
                <a href="product-listing.html">Trainning &amp; game(47)</a>
              </li>
              <li>
                <a href="product-listing.html">More</a>
              </li>
            </ul>
          </div>
        </aside>
        <aside className="ps-widget--sidebar ps-widget--filter">
          <div className="ps-widget__header">
            <h3>Category</h3>
          </div>
          <div className="ps-widget__content">
            <div
              className="ac-slider"
              data-default-min={300}
              data-default-max={2000}
              data-max={3450}
              data-step={50}
              data-unit="$"
            />
            <p className="ac-slider__meta">
              Price:
              <span className="ac-slider__value ac-slider__min" />-
              <span className="ac-slider__value ac-slider__max" />
            </p>
            <a className="ac-slider__filter ps-btn" href="index.html">
              Filter
            </a>
          </div>
        </aside>
        <aside className="ps-widget--sidebar ps-widget--category">
          <div className="ps-widget__header">
            <h3>Sky Brand</h3>
          </div>
          <div className="ps-widget__content">
            <ul className="ps-list--checked">
              <li className="current">
                <a href="product-listing.html">Nike(521)</a>
              </li>
              <li>
                <a href="product-listing.html">Adidas(76)</a>
              </li>
              <li>
                <a href="product-listing.html">Baseball(69)</a>
              </li>
              <li>
                <a href="product-listing.html">Gucci(36)</a>
              </li>
              <li>
                <a href="product-listing.html">Dior(108)</a>
              </li>
              <li>
                <a href="product-listing.html">B&amp;G(108)</a>
              </li>
              <li>
                <a href="product-listing.html">Louis Vuiton(47)</a>
              </li>
            </ul>
          </div>
        </aside>
        <aside className="ps-widget--sidebar ps-widget--category">
          <div className="ps-widget__header">
            <h3>Width</h3>
          </div>
          <div className="ps-widget__content">
            <ul className="ps-list--checked">
              <li className="current">
                <a href="product-listing.html">Narrow</a>
              </li>
              <li>
                <a href="product-listing.html">Regular</a>
              </li>
              <li>
                <a href="product-listing.html">Wide</a>
              </li>
              <li>
                <a href="product-listing.html">Extra Wide</a>
              </li>
            </ul>
          </div>
        </aside>
        <div className="ps-sticky desktop">
          <aside className="ps-widget--sidebar">
            <div className="ps-widget__header">
              <h3>Size</h3>
            </div>
            <div className="ps-widget__content">
              <table className="table ps-table--size">
                <tbody>
                  <tr>
                    <td className="active">3</td>
                    <td>5.5</td>
                    <td>8</td>
                    <td>10.5</td>
                    <td>13</td>
                  </tr>
                  <tr>
                    <td>3.5</td>
                    <td>6</td>
                    <td>8.5</td>
                    <td>11</td>
                    <td>13.5</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>6.5</td>
                    <td>9</td>
                    <td>11.5</td>
                    <td>14</td>
                  </tr>
                  <tr>
                    <td>4.5</td>
                    <td>7</td>
                    <td>9.5</td>
                    <td>12</td>
                    <td>14.5</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>7.5</td>
                    <td>10</td>
                    <td>12.5</td>
                    <td>15</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </aside>
          <aside className="ps-widget--sidebar">
            <div className="ps-widget__header">
              <h3>Color</h3>
            </div>
            <div className="ps-widget__content">
              <ul className="ps-list--color">
                <li>
                  <a href="index.html" title="test">
                    test
                  </a>
                </li>
                <li>
                  <a href="index.html" title="test">
                    test
                  </a>
                </li>
                <li>
                  <a href="index.html" title="test">
                    test
                  </a>
                </li>
                <li>
                  <a href="index.html" title="test">
                    test
                  </a>
                </li>
                <li>
                  <a href="index.html" title="test">
                    test
                  </a>
                </li>
                <li>
                  <a href="index.html" title="test">
                    test
                  </a>
                </li>
                <li>
                  <a href="index.html" title="test">
                    test
                  </a>
                </li>
                <li>
                  <a href="index.html" title="test">
                    test
                  </a>
                </li>
                <li>
                  <a href="index.html" title="test">
                    test
                  </a>
                </li>
                <li>
                  <a href="index.html" title="test">
                    test
                  </a>
                </li>
                <li>
                  <a href="index.html" title="test">
                    test
                  </a>
                </li>
                <li>
                  <a href="index.html" title="test">
                    test
                  </a>
                </li>
                <li>
                  <a href="index.html" title="test">
                    test
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
        {/* aside.ps-widget--sidebar */}
        {/*    .ps-widget__header: h3 Ads Banner */}
        {/*    .ps-widget__content */}
        {/*        a(href='product-listing'): img(src="skytheme-ecommerce-html5-template/template/images/offer/sidebar.jpg" alt="") */}
        {/**/}
        {/* aside.ps-widget--sidebar */}
        {/*    .ps-widget__header: h3 Best Seller */}
        {/*    .ps-widget__content */}
        {/*        - for (var i = 0; i < 3; i ++) */}
        {/*            .ps-shoe--sidebar */}
        {/*                .ps-shoe__thumbnail */}
        {/*                    a(href='#') */}
        {/*                    img(src="skytheme-ecommerce-html5-template/template/images/shoe/sidebar/"+(i+1)+".jpg" alt="") */}
        {/*                .ps-shoe__content */}
        {/*                    if i == 1 */}
        {/*                        a(href='#').ps-shoe__title Nike Flight Bonafide */}
        {/*                    else if i == 2 */}
        {/*                        a(href='#').ps-shoe__title Nike Sock Dart QS */}
        {/*                    else */}
        {/*                        a(href='#').ps-shoe__title Men's Sky */}
        {/*                    p <del> £253.00</del> £152.00 */}
        {/*                    a(href='#').ps-btn PURCHASE */}
      </div>
    );
  }
}

export default FilterMenu;
