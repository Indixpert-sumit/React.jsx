import { createContext, useReducer } from "react";

export const CartContext = createContext();

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const exist = state.cartItems.find(item => item.id === action.payload.id);

      if (exist) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, qty: 1 }]
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      };

    case "INCREASE_QTY":
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
        )
      };

    case "DECREASE_QTY":
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload
            ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
            : item
        )
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(CartReducer, {
    cartItems: [],
  });

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};
