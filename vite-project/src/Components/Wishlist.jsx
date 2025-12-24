import React, { useContext } from 'react'
import { WishlistContext } from '../Context/Context';

const Wishlist = () => {
    const { wishlistState } = useContext(WishlistContext);

    return (
        <div>
            <pre>{JSON.stringify(wishlistState.wishlistItems, null, 2)}</pre>

        </div>
    )
}

export default Wishlist
