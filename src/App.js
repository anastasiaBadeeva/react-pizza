import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { Cart, Main } from './pages';
import { setPizza } from './redux/actions/pizza';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizza(data));
    });
  }, []);

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
