const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const pizza = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART':
      let newItem = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };
      let allPizzas = [].concat.apply([], Object.values(newItem));
      let totalPrice = allPizzas.reduce((sum, obj) => {
        return obj.price + sum;
      }, 0);
      return {
        ...state,
        items: newItem,
        totalCount: allPizzas.length,
        totalPrice,
      };
    default:
      return state;
  }
};

export default pizza;
