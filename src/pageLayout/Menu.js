import React from 'react';
import { Tab } from 'semantic-ui-react';
import Section3 from '../section3';
import Section7 from '../section7';
import Seasons from '../seasons';

const panes = [
  { menuItem: 'Image Gallery Component', render: () => <Tab.Pane attached='bottom'><Section7 /></Tab.Pane> },
  { menuItem: 'Seasons Component', render: () => <Tab.Pane attached='bottom'><Seasons /></Tab.Pane> },
  { menuItem: 'Section 3', render: () => <Tab.Pane attached='bottom'><Section3 /></Tab.Pane> }
]

export default () => <Tab menu={{ attached: 'top' }} panes={panes} />
