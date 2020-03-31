import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Menu from './pageLayout/Menu';

const App = () => {
  return (
    <Fragment>
      <Menu />
    </Fragment>
  );
};

// Take that component and show on the screen
ReactDOM.render(<App />, document.querySelector("#root"));