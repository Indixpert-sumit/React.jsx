import React, { useReducer } from "react";
import { WishlistContext } from "../Context";

const WishlistProvider = ({ children }) => {

  const wishlistReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
      case "ADD_TO_WISHLIST":
        const exists = state.wishlistItems.some(
          (item) => item.id === payload.id
        );

        if (exists) return state;

        return {
          ...state,
          wishlistItems: [...state.wishlistItems, payload],
        };

      case "REMOVE_FROM_WISHLIST":
        return {
          ...state,
          wishlistItems: state.wishlistItems.filter(
            (item) => item.id !== payload
          ),
        };

      default:
        return state;
    }
  };

  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    userId: 1,
    wishlistItems: [],
  });

  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
