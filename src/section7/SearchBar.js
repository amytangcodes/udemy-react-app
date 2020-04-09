import React, { Component } from 'react'

class SearchBar extends Component {
  state = {

  }

  onInputChange() {

  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form action="" className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" placeholder="Search Bar" onChange={this.onInputChange}/>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
