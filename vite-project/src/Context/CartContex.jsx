import { createContext, useReducer } from "react";

export const CartContext = createContext();

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": return {...state, cartItems: [...state.cartItems, action.payload],
      };

  case "REMOVE_FROM_CART":
  return {...state,
    cartItems: state.cartItems.filter(item => item.id !== action.payload)
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
