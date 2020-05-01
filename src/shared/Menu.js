import React from 'react';
import { Tab } from 'semantic-ui-react';
import Project01 from '../project01';
import Project02 from '../project02';
import Project03 from '../project03';
import Project04 from '../project04';


const panes = [
  { menuItem: 'Youtube App', render: () => <Tab.Pane attached='bottom'><Project04 /></Tab.Pane> },
  { menuItem: 'User Cards', render: () => <Tab.Pane attached='bottom'><Project01 /></Tab.Pane> },
  { menuItem: 'Seasons Component', render: () => <Tab.Pane attached='bottom'><Project02 /></Tab.Pane> },
  { menuItem: 'Image Gallery Component', render: () => <Tab.Pane attached='bottom'><Project03 /></Tab.Pane> }
]

export default () => <Tab menu={{ attached: 'top' }} panes={panes} />
