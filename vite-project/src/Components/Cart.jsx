import { Cart } from "react-bootstrap-icons";
import { CartContext } from "../Context/CartContex";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useContext } from "react";

const Cart_ = () => {
  const { cartState, cartDispatch } = useContext(CartContext);

  const TotalPrice = () => {
    const total = cartState.cartItems.reduce((sum, item) => {
      return sum + item.qty * Number(item.price);
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
        {cartState.cartItems.length === 0 && (<h4 className="text-center mt-5">Your Cart is Empty</h4>
        )}

        {cartState.cartItems.map((item) => (
          <Col key={item.id} md={4} className="p-2">
            <Card>
              <Card.Img variant="top" src={item.thumbnail} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Title>₹{item.price}</Card.Title>
              </Card.Body>

              <Card.Footer className="d-flex justify-content-between align-items-center">

                <div className="d-flex align-items-center gap-2">
                  <Button
                    variant="success"
                    size="sm"
                    onClick={() =>
                      cartDispatch({
                        type: "DECREASE_QTY",
                        payload: item.id,
                      })
                    }
                  >
                    -
                  </Button>

                  <span>{item.qty}</span>

                  <Button
                    variant="success"
                    size="sm"
                    onClick={() =>
                      cartDispatch({
                        type: "INCREASE_QTY",
                        payload: item.id,
                      })
                    }
                  >
                    +
                  </Button>
                </div>

                <Button
                  variant="danger"
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
