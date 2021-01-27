import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { Cart, Main } from './pages';

const App = () => {
  const [pizza, setPizza] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/bd.json').then(({ data }) => {
      setPizza(data.pizzas);
    });
  }, []);
  return (
    <div>
      <div className="wrapper">
        <Header />
        <Route exact path="/" render={() => <Main pizza={pizza} />} />
        <Route exact path="/cart" component={Cart} />
        <div className="content"></div>
      </div>
    </div>
  );
};

export default App;
