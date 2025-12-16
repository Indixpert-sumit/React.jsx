import React, { Fragment } from "react";
import { Button, Col, Row, Card } from "react-bootstrap";
import { productsData } from "../Data/products";

const Products = () => {
    return (
        <Fragment>
            <h3 className="mb-3">LIST OF PRODUCTS</h3>
            <hr />

            <Row>
                {productsData.map((product, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">

                        <Card className="h-100">
                            <Card.Img
                                variant="top"
                                src={product.thumbnail}
                                style={{ height: "180px", objectFit: "cover" }}
                            />

                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.category}</Card.Text>
                            </Card.Body>

                            <Card.Footer className="d-flex justify-content-between">
                                <Button variant="primary" size="sm">
                                    Buy Now
                                </Button>
                                <Button variant="outline-primary" size="sm">
                                    Add to Cart
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Fragment>
    );
};

export default Products;
