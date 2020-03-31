import React from 'react';
import { Tab } from 'semantic-ui-react';
import Section3 from '../section3';
import Seasons from '../seasons';

const panes = [
  { menuItem: 'Section 3', render: () => <Tab.Pane attached='bottom'><Section3 /></Tab.Pane> },
  { menuItem: 'Seasons', render: () => <Tab.Pane attached='bottom'><Seasons /></Tab.Pane> }
]

export default () => <Tab menu={{ attached: 'top' }} panes={panes} />
