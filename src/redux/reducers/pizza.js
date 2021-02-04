const initialState = {
  items: [],
  isLoading: false,
};

const pizza = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PIZZA':
      return {
        ...state,
        items: action.payload,
        isLoading: true,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

export default pizza;
