import { Cart } from "react-bootstrap-icons";
import { CartContext } from "../Context/CartContex";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useContext } from "react";

const Cart_ = () => {
  const { cartState, cartDispatch } = useContext(CartContext);
  const TotalPrice = () => {
    const total = cartState.cartItems.reduce((sum, item) => {
      return sum + Number(item.price);
    }, 0);

    return Math.round(total);
  };


  const handleRemove = (id) => {
    cartDispatch({ type: "REMOVE_FROM_CART", payload: id });
    alert("Item removed from cart");
  };




  return (
    <div>


      <h3 className="text-end mt-3">Total: ₹{TotalPrice()}</h3>

      <Row>
        {cartState.cartItems.map((item) => (
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

export default Cart_;
