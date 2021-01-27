import * as types from "./constants";
const initialCoin = [];

export default (state = initialCoin, action) => {
  switch (action.type) {
    case types.ADD_NOTE:
      return [...state, action.payload];
    case types.EDIT_NOTE:
      return state.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );

    case types.DELETE_NOTE:
      return state.filter((el) => el.id !== action.payload);
    default:
      return state;
  }
};
