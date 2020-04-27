import React from 'react';
import { Tab } from 'semantic-ui-react';
import Section3 from '../section3';
import Section7 from '../section7';
import Section11 from '../section11';
import Seasons from '../seasons';

const panes = [
  { menuItem: 'Youtube App', render: () => <Tab.Pane attached='bottom'><Section11 /></Tab.Pane> },
  { menuItem: 'User Cards', render: () => <Tab.Pane attached='bottom'><Section3 /></Tab.Pane> },
  { menuItem: 'Seasons Component', render: () => <Tab.Pane attached='bottom'><Seasons /></Tab.Pane> },
  { menuItem: 'Image Gallery Component', render: () => <Tab.Pane attached='bottom'><Section7 /></Tab.Pane> }
]

export default () => <Tab menu={{ attached: 'top' }} panes={panes} />
