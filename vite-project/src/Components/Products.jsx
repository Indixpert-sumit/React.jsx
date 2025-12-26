import React, { Fragment, useContext } from "react";
import { Button, Col, Row, Card } from "react-bootstrap";
import { productsData } from "../Data/products";
import { WishlistContext } from "../Context/Context";
import { CartContext } from "../Context/CartContex";

const Products = () => {

  // Wishlist
  const { wishlistState, wishlistDispatch } = useContext(WishlistContext);

  const AddToWishlistBtn = ({ product }) => {
    const handleAdd = () => {

      const exists = wishlistState.wishlistItems.some(
        (item) => item.id === product.id
      );

      if (exists) {
        alert("Product already in wishlist");
      } else {
        wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: product });
        alert("Added to wishlist");
      }
    };

    return (
      <Button variant="primary" size="sm" onClick={handleAdd}>
        Wishlist
      </Button>
    );
  };

  // Cart
  const AddToCart = ({ product }) => {
    const { cartDispatch, cartState } = useContext(CartContext);

    const handleAddCart = () => {

      const exists = cartState.cartItems.some(
        (item) => item.id === product.id
      );

      if (exists) {
        alert("Product already in cart");
      } else {
        cartDispatch({ type: "ADD_TO_CART", payload: product });
        alert("Added to cart");
      }
    };

    return (
      <Button variant="secondary" size="sm" onClick={handleAddCart}>
        Add to Cart
      </Button>
    );
  };

  return (
    <Fragment>
      <h3>List of Products</h3>
      <Row>
        {productsData.map((item) => (
          <Col key={item.id} md={4} className="p-2">
            <Card>
              <Card.Img variant="top" src={item.thumbnail} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Title>₹{item.price}</Card.Title>
              </Card.Body>

              <Card.Footer className="d-flex justify-content-between">
                <AddToWishlistBtn product={item} />
                <AddToCart product={item} />
              </Card.Footer>

            </Card>
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};

export default Products;
