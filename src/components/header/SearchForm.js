import React, {Component} from 'react';

class SearchForm extends Component {
    render() {
        return (
            <form className="ps-search--header" action="do_action" method="post">
                <input className="form-control" type="text" placeholder="Search Product…" />
                <button><i className="ps-icon-search" /></button>
            </form>
        );
    }
}

export default SearchForm;