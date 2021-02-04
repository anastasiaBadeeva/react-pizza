import axios from 'axios';

export const setLoading = (payload) => ({
  type: 'SET_LOADING',
  payload,
});
export const getPizza = (category, sortBy) => (dispatch) => {
  dispatch(setLoading(false));
  axios
    .get(
      `http://localhost:3001/pizzas?${
        category !== null ? `category=${category}` : ''
      }&_sort=${sortBy}&_order=desc`,
    )
    .then(({ data }) => {
      dispatch(setPizza(data));
      console.log(category, sortBy);
    });
};
export const setPizza = (items) => ({
  type: 'SET_PIZZA',
  payload: items,
});
