import React, {Component} from 'react';

class MainMenu extends Component {
    render() {
        return (
            <ul className="main-menu menu">
                <li className="menu-item menu-item-has-children dropdown"><a href="index.html">Home</a>
                    <ul className="sub-menu">
                        <li className="menu-item"><a href="index.html">Homepage #1</a></li>
                        <li className="menu-item"><a href="#">Homepage #2</a></li>
                        <li className="menu-item"><a href="#">Homepage #3</a></li>
                    </ul>
                </li>
                <li className="menu-item menu-item-has-children has-mega-menu"><a href="#">Men</a>
                    <div className="mega-menu">
                        <div className="mega-wrap">
                            <div className="mega-column">
                                <ul className="mega-item mega-features">
                                    <li><a href="product-listing.html">NEW RELEASES</a></li>
                                    <li><a href="product-listing.html">FEATURES SHOES</a></li>
                                    <li><a href="product-listing.html">BEST SELLERS</a></li>
                                    <li><a href="product-listing.html">NOW TRENDING</a></li>
                                    <li><a href="product-listing.html">SUMMER ESSENTIALS</a></li>
                                    <li><a href="product-listing.html">MOTHER'S DAY COLLECTION</a></li>
                                    <li><a href="product-listing.html">FAN GEAR</a></li>
                                </ul>
                            </div>
                            <div className="mega-column">
                                <h4 className="mega-heading">Shoes</h4>
                                <ul className="mega-item">
                                    <li><a href="product-listing.html">All Shoes</a></li>
                                    <li><a href="product-listing.html">Running</a></li>
                                    <li><a href="product-listing.html">Training &amp; Gym</a></li>
                                    <li><a href="product-listing.html">Basketball</a></li>
                                    <li><a href="product-listing.html">Football</a></li>
                                    <li><a href="product-listing.html">Soccer</a></li>
                                    <li><a href="product-listing.html">Baseball</a></li>
                                </ul>
                            </div>
                            <div className="mega-column">
                                <h4 className="mega-heading">CLOTHING</h4>
                                <ul className="mega-item">
                                    <li><a href="product-listing.html">Compression &amp; Nike Pro</a></li>
                                    <li><a href="product-listing.html">Tops &amp; T-Shirts</a></li>
                                    <li><a href="product-listing.html">Polos</a></li>
                                    <li><a href="product-listing.html">Hoodies &amp; Sweatshirts</a></li>
                                    <li><a href="product-listing.html">Jackets &amp; Vests</a></li>
                                    <li><a href="product-listing.html">Pants &amp; Tights</a></li>
                                    <li><a href="product-listing.html">Shorts</a></li>
                                </ul>
                            </div>
                            <div className="mega-column">
                                <h4 className="mega-heading">Accessories</h4>
                                <ul className="mega-item">
                                    <li><a href="product-listing.html">Compression &amp; Nike Pro</a></li>
                                    <li><a href="product-listing.html">Tops &amp; T-Shirts</a></li>
                                    <li><a href="product-listing.html">Polos</a></li>
                                    <li><a href="product-listing.html">Hoodies &amp; Sweatshirts</a></li>
                                    <li><a href="product-listing.html">Jackets &amp; Vests</a></li>
                                    <li><a href="product-listing.html">Pants &amp; Tights</a></li>
                                    <li><a href="product-listing.html">Shorts</a></li>
                                </ul>
                            </div>
                            <div className="mega-column">
                                <h4 className="mega-heading">BRAND</h4>
                                <ul className="mega-item">
                                    <li><a href="product-listing.html">NIKE</a></li>
                                    <li><a href="product-listing.html">Adidas</a></li>
                                    <li><a href="product-listing.html">Dior</a></li>
                                    <li><a href="product-listing.html">B&amp;G</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="menu-item"><a href="#">Women</a></li>
                <li className="menu-item"><a href="#">Kids</a></li>
                <li className="menu-item menu-item-has-children dropdown"><a href="#">News</a>
                    <ul className="sub-menu">
                        <li className="menu-item menu-item-has-children dropdown"><a href="blog-grid.html">Blog-grid</a>
                            <ul className="sub-menu">
                                <li className="menu-item"><a href="blog-grid.html">Blog Grid 1</a></li>
                                <li className="menu-item"><a href="blog-grid-2.html">Blog Grid 2</a></li>
                            </ul>
                        </li>
                        <li className="menu-item"><a href="blog-list.html">Blog List</a></li>
                    </ul>
                </li>
                <li className="menu-item menu-item-has-children dropdown"><a href="#">Contact</a>
                    <ul className="sub-menu">
                        <li className="menu-item"><a href="contact-us.html">Contact Us #1</a></li>
                        <li className="menu-item"><a href="contact-us.html">Contact Us #2</a></li>
                    </ul>
                </li>
            </ul>
        );
    }
}

export default MainMenu;