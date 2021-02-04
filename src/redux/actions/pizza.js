import axios from 'axios';

export const setLoading = (payload) => ({
  type: 'SET_LOADING',
  payload,
});
export const getPizza = () => (dispatch) => {
  dispatch(setLoading(false));
  axios.get('http://localhost:3001/pizzas').then(({ data }) => {
    dispatch(setPizza(data));
  });
};
export const setPizza = (items) => ({
  type: 'SET_PIZZA',
  payload: items,
});
