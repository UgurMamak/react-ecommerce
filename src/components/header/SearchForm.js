import React from "react";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form className="ps-search--header" action="do_action" method="post">
        <input
          className="form-control"
          type="text"
          placeholder="Search Product…"
        />
        <button type="button">
          <i className="ps-icon-search" />
        </button>
      </form>
    );
  }
}

export default SearchForm;
