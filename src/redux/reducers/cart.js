const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};
const getTotalPrice = (arr) =>
  arr.reduce((sum, obj) => {
    return obj.price + sum;
  }, 0);
const pizza = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART':
      let currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];
      let newItem = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };
      let allPizzas = [].concat.apply(
        [],
        Object.values(newItem).map((obj) => obj.items),
      );
      let totalPrice = getTotalPrice(allPizzas);
      return {
        ...state,
        items: newItem,
        totalCount: allPizzas.length,
        totalPrice,
      };
    case 'REMOVE_CART_ITEM':
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    case 'CLEAR_CART':
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };

    default:
      return state;
  }
};

export default pizza;
