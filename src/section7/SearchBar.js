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
    const { images } = this.props;

    return (
      <div className="ui segment">
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
        </form>
        <p>Found: {images.length} images</p>
      </div>
    )
  }
}

export default SearchBar
