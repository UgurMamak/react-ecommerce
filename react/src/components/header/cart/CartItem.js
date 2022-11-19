import React, { Component } from "react";
/* eslint-disable camelcase */

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      basketItem: { quantity, product, total_amount },
    } = this.props;
    return (
      <div className="ps-cart-item">
        <a className="ps-cart-item__close" aria-label="''" href="index.html" />
        <div className="ps-cart-item__thumbnail">
          <a href="product-detail.html" aria-label="''" />
          <img
            src={
              product.product_image[0].image
                ? product.product_image[0].image
                : "skytheme-ecommerce-html5-template/template/images/cart-preview/3.jpg "
            }
            alt=""
          />
        </div>
        <div className="ps-cart-item__content">
          <a className="ps-cart-item__title" href="product-detail.html" alt="">
            {product.name}
          </a>
          <p>
            <span>
              Adet:<i>{quantity}</i>
            </span>
            <span>
              Toplam Tutar:<i>£{total_amount}</i>
            </span>
          </p>
        </div>
      </div>
    );
  }
}
export default CartItem;
