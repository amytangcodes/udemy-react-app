import React, { Fragment } from 'react';
import Menu from './Menu';
import Footer from './Footer';
import "../styles/Style.scss";

const App = () => {
  return (
    <Fragment>
      <Menu />
      <Footer />
    </Fragment>
  );
};

export default App;