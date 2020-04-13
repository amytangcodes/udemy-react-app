import React, { Component } from 'react'

class SearchBar extends Component {
  state = {
    text: "WWW."
  }

  onFormSubmit = (e) => {
    e.preventDefault();  // do not want the form to automatically submit and rerender the page.

    console.log(this.state.text);
  }

  render() {
    const {text} = this.state;
    return (
      <div className="search-bar ui segment">
        <form action="" className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              placeholder="Search Bar"
              value={text}
              onChange={(e) => this.setState({
                text: e.target.value.toUpperCase()
              })}
            />
          </div>
          <div className="field">
            <p>Your input: <br/>{text}</p>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
