import React from "react";
import CartItem from "./CartItem";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { basket } = this.props;
    if (basket) {
      return (
        <div className="ps-cart">
          <a className="ps-cart__toggle" href="index.html">
            <span>
              <i>{basket.total_quantity}</i>
            </span>
            <i className="ps-icon-shopping-cart" />
          </a>
          <div className="ps-cart__listing">
            <div className="ps-cart__content">
              {basket.basketitem.map((item, index) => (
                <CartItem key={index} basketItem={item} />
              ))}
            </div>
            <div className="ps-cart__total">
              <p>
                Toplam Adet :<span>{basket.total_quantity}</span>
              </p>
              <p>
                Toplam Tutar:<span>£{basket.total_amount}</span>
              </p>
            </div>
            <div className="ps-cart__footer">
              <a className="ps-btn" href="cart.html">
                SİPARİŞİ TAMAMLA
                <i className="ps-icon-arrow-left" />
              </a>
            </div>
          </div>
        </div>
      );
    }
    return <div />;
  }
}

export default Index;
