import React, {Component} from 'react';

class PostCard extends Component {
    render() {
        return (
            <div className="ps-post">
                <div className="ps-post__thumbnail"><a className="ps-post__overlay" href="blog-detail.html" /><img src="skytheme-ecommerce-html5-template/template/images/blog/1.jpg" alt="" /></div>
                <div className="ps-post__content"><a className="ps-post__title" href="blog-detail.html">An Inside Look at the Breaking2 Kit</a>
                    <p className="ps-post__meta"><span>By:<a className="mr-5" href="blog.html">Alena Studio</a></span> -<span className="ml-5">Jun 10, 2017</span></p>
                    <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further…</p><a className="ps-morelink" href="blog-detail.html">Read more<i className="fa fa-long-arrow-right" /></a>
                </div>
            </div>
        );
    }
}

export default PostCard;