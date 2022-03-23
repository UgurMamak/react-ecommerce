import React, {Component} from 'react';

class Pagination extends Component {
    render() {
        return (
            <div className="ps-pagination">
                <ul className="pagination">
                    <li><a href="#"><i className="fa fa-angle-left" /></a></li>
                    <li className="active"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">...</a></li>
                    <li><a href="#"><i className="fa fa-angle-right" /></a></li>
                </ul>
            </div>
        );
    }
}

export default Pagination;