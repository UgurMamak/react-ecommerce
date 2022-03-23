import React, {Component} from 'react';

class ProductCard extends Component {
    render() {
        return (
            <div className="ps-shoe mb-30">
                <div className="ps-shoe__thumbnail">
                    <div className="ps-badge"><span>New</span></div>
                    <div className="ps-badge ps-badge--sale ps-badge--2nd"><span>-35%</span></div><a className="ps-shoe__favorite" href="#"><i className="ps-icon-heart" /></a><img src="skytheme-ecommerce-html5-template/template/images/shoe/1.jpg" alt="" /><a className="ps-shoe__overlay" href="product-detail.html" />
                </div>
                <div className="ps-shoe__content">
                    <div className="ps-shoe__variants">
                        <div className="ps-shoe__variant normal"><img src="skytheme-ecommerce-html5-template/template/images/shoe/2.jpg" alt="" /><img src="skytheme-ecommerce-html5-template/template/images/shoe/3.jpg" alt="" /><img src="skytheme-ecommerce-html5-template/template/images/shoe/4.jpg" alt="" /><img src="skytheme-ecommerce-html5-template/template/images/shoe/5.jpg" alt="" /></div>
                        <select className="ps-rating ps-shoe__rating">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                        </select>
                    </div>
                    <div className="ps-shoe__detail"><a className="ps-shoe__name" href="#">Air Jordan 7 Retro</a>
                        <p className="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span className="ps-shoe__price">
                            <del>£220</del> £ 120</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductCard;