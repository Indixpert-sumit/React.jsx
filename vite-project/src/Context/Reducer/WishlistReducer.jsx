 export const WishlistReducer = (state, action) => {
           const { type, payload } = action;
           switch (type) {
                   case "ADD_TO_WISHLIST":
                             return {
                                   ...state,
                                   wishlistItems: [
                                          ...state.wishlistItems,
                                          { id: uuid(), productID: payload.id, title: payload.title,
                                           price: payload.price, thumbnail: payload.thumbnail, },
                                        ],
                                   };
                   case "REMOVE_FROM_WISHLIST":
                            return {
                                   ...state,
                                   wishlistItems: state.wishlistItems.filter((product) => product.id !== payload),
                            };
                  default:
                             return state;
 } };
