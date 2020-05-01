import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Menu from './shared/Menu';
import Footer from './shared/Footer';
import "./styles/Style.scss";

const App = () => {
  return (
    <Fragment>
      <Menu />
      <Footer />
    </Fragment>
  );
};

// Take that component and show on the screen
ReactDOM.render(<App />, document.querySelector("#root"));