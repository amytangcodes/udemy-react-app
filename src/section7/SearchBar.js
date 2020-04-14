import React, { Component } from 'react'

class SearchBar extends Component {
  state = {
    text: ""
  }

  onFormSubmit = (e) => {
    const { text } = this.state;
    const { onSubmit } = this.props;

    e.preventDefault();  // do not want the form to automatically submit and rerender the page.
    onSubmit(text);
  }

  render() {
    const { text} = this.state;

    return (
      <div className="search-bar ui segment">
        <form action="" className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              placeholder="Search Your Image!"
              value={text}
              onChange={(e) => this.setState({
                text: e.target.value.toUpperCase()
              })}
            />
          </div>
          <div className="field">
            <p>Your Image Search Result:</p>
            <div>{text}</div>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
