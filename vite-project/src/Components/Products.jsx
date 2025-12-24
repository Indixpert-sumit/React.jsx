import React, { Fragment, useContext } from "react";
import { Button, Col, Row, Card } from "react-bootstrap";
import { productsData } from "../Data/products";
import { WishlistContext } from "../Context/Context";

const Products = () => {
  const { wishlistState, wishlistDispatch } = useContext(WishlistContext);

  const AddToWishlistBtn = ({ product }) => {
    const handleAdd = () => {
      const exists = wishlistState.wishlistItems.some(
        (item) => item.id === product.id
      );

      if (exists) {
        ("Product already added in wishlist");
      } else {
        wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: product });
        alert("Item added successfully");
      }
    };

    return (
      <Button variant="primary" size="sm" onClick={handleAdd}>
        Wishlist
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
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between">
                <Button variant="primary">Cart</Button>
                <AddToWishlistBtn product={item} />
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};

export default Products;
