import { useReducer } from 'react';
import { WishlistContext } from "../Context";
import { WishlistReducer } from '../Reducer/WishlistReducer';
const WishlistProvider = ({ children }) => {
  const WishlistReducer =(state,action) =>{
    console.log(JSON.stringify(state))
        console.log(JSON.stringify(action))

  }
  const [ wishlistState, wishlistDispatch ] = useReducer(WishlistReducer, {
    userId: 1,
    wishlistItems: [
      {
        id :1,
        title:'Essence Mascara Lash Princess'
      },
       {
        id:2,
        title:'Essence Mascara Lash Princess'
      },
       {
        id :3,
        title:'Essence Mascara Lash Princess'
      },
    ],
  });
  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};
export default WishlistProvider;
