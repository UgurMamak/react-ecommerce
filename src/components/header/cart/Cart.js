import React, {Component} from 'react';

class Cart extends Component {
    render() {
        return (
            <div className="ps-cart"><a className="ps-cart__toggle" href="#"><span><i>20</i></span><i className="ps-icon-shopping-cart" /></a>
                <div className="ps-cart__listing">
                    <div className="ps-cart__content">
                        <div className="ps-cart-item"><a className="ps-cart-item__close" href="#" />
                            <div className="ps-cart-item__thumbnail"><a href="product-detail.html" /><img src="skytheme-ecommerce-html5-template/template/images/cart-preview/1.jpg" alt="" /></div>
                            <div className="ps-cart-item__content"><a className="ps-cart-item__title" href="product-detail.html">Amazin’ Glazin’</a>
                                <p><span>Quantity:<i>12</i></span><span>Total:<i>£176</i></span></p>
                            </div>
                        </div>
                        <div className="ps-cart-item"><a className="ps-cart-item__close" href="#" />
                            <div className="ps-cart-item__thumbnail"><a href="product-detail.html" /><img src="skytheme-ecommerce-html5-template/template/images/cart-preview/2.jpg" alt="" /></div>
                            <div className="ps-cart-item__content"><a className="ps-cart-item__title" href="product-detail.html">The Crusty Croissant</a>
                                <p><span>Quantity:<i>12</i></span><span>Total:<i>£176</i></span></p>
                            </div>
                        </div>
                        <div className="ps-cart-item"><a className="ps-cart-item__close" href="#" />
                            <div className="ps-cart-item__thumbnail"><a href="product-detail.html" /><img src="skytheme-ecommerce-html5-template/template/images/cart-preview/3.jpg" alt="" /></div>
                            <div className="ps-cart-item__content"><a className="ps-cart-item__title" href="product-detail.html">The Rolling Pin</a>
                                <p><span>Quantity:<i>12</i></span><span>Total:<i>£176</i></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="ps-cart__total">
                        <p>Number of items:<span>36</span></p>
                        <p>Item Total:<span>£528.00</span></p>
                    </div>
                    <div className="ps-cart__footer"><a className="ps-btn" href="cart.html">Check out<i className="ps-icon-arrow-left" /></a></div>
                </div>
            </div>
        );
    }
}

export default Cart;