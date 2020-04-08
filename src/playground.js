import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import Section3 from '../section3';
import Seasons from '../seasons';


class MenuTabular extends Component {
  state = { activeItem: 'section3' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state;


    console.log({ activeItem });

    return (
      <div>
        <Menu attached='top' tabular>
          <Menu.Item
            name='section3'
            as={NavLink} to='/section3'
            data-tab="section3"
          />
          <Menu.Item
            name='seasons'
            active={activeItem === 'seasons'}
            data-tab="seasons"
            onClick={this.handleItemClick}
          />
        </Menu>

        <Segment attached="bottom" className="main ui container">
          <Section3 active={activeItem === 'section3'} />
          <Seasons active={activeItem === 'seasons'} />
        </Segment>
      </div>

    );
  }
}

export default MenuTabular;