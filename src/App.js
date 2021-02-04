import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { Cart, Main } from './pages';

const App = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <Route exact path="/" component={Main} />
        <Route exact path="/cart" component={Cart} />
        <div className="content"></div>
      </div>
    </div>
  );
};

export default App;
