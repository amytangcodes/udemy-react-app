import React, { Component } from 'react'

class SearchBar extends Component {
  state = {
    text: ""
  }

  onFormSubmit = (e) => {
    const { text } = this.state;
    const { onSubmit } = this.props;

    e.preventDefault();  // do not want the form to automatically submit and rerender the page.

    // Pass a callback from the parent to the child
    // as a way to pass props from child
    // back up to parent
    onSubmit(text);
  }

  render() {
    const { text } = this.state;
    const { resultItems } = this.props;

    return (
      <div className="search-bar ui segment">
        <form action="" className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Enter Your Search Term</label>
            <input
              type="text"
              placeholder="What are you looking for?"
              value={text}
              onChange={(e) => this.setState({
                text: e.target.value.toUpperCase()
              })}
            />
          </div>
        </form>
        <p>Found: {resultItems.length} results</p>
      </div>
    )
  }
}

export default SearchBar
