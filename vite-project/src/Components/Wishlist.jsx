import React, { useContext } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { WishlistContext } from "../Context/Context";

const Wishlist = () => {
  const { wishlistState, wishlistDispatch } = useContext(WishlistContext);

  const handleRemove = (id) => {
    wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
    alert("Item removed from wishlist");
  };



  return (
    <div>


     
        <Row>
          {wishlistState.wishlistItems.map((item) => (
            <Col key={item.id} md={4} className="p-2">
              <Card>
                <Card.Img variant="top" src={item.thumbnail} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Title>₹{item.price}</Card.Title>
                </Card.Body>

                <Card.Footer className="d-flex justify-content-between">
                  <Button
                    variant="success"
                    size="sm"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      
    </div>
  );
};

export default Wishlist;
