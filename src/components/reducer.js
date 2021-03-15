export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload.user };
    case "ADD_TO_BASKET":
      //logic for adding to basket
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case "REMOVE_FROM_BASKET":
      //logig for removing from basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      // if (index >= 0) {
      //item exists in basket, remove it...
      newBasket.splice(index, 1);
      // } else {
      // console.warn(`Can't remove product (id: ${action.payload.id})`);
      // }
      // return state;
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
