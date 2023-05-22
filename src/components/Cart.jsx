import React, { useState } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEraser,
  faShoppingCart,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Checkout from "./Checkout";
import "./Cart.css";

const Cart = ({ cartItems, setCartItems }) => {
  const handleClearCart = () => {
    setCartItems([]);
  };

  const decreaseQuantity = (item) => {
    const updatedCart = cartItems
      .map((cartItem) => {
        if (cartItem.id === item.id) {
          if (cartItem.quantity > 1) {
            const updatedQuantity = cartItem.quantity - 1;
            const updatedPrice =
              (cartItem.price / cartItem.quantity) * updatedQuantity;
            return {
              ...cartItem,
              quantity: updatedQuantity,
              price: updatedPrice,
            };
          } else {
            return null; // Remove the item from the cart
          }
        }
        return cartItem;
      })
      .filter(Boolean);

    setCartItems(updatedCart);
  };

  const increaseQuantity = (item) => {
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        const updatedQuantity = cartItem.quantity + 1;
        const updatedPrice =
          (cartItem.price / cartItem.quantity) * updatedQuantity;
        return {
          ...cartItem,
          quantity: updatedQuantity,
          price: updatedPrice,
        };
      }
      return cartItem;
    });

    setCartItems(updatedCart);
  };

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    return totalPrice;
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid>
      <h2>Cart</h2>
      <Row>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <Container>
            <Row>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingBottom: "2.5%",
                }}
              >
                <Col>
                  <button className="cart-button" onClick={handleClearCart}>
                    <FontAwesomeIcon icon={faEraser} size="lg" />
                    Clear Cart
                  </button>
                </Col>
                <Col>
                  <button onClick={handleShow} className="cart-button">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    Checkout
                  </button>
                </Col>
              </Row>
            </Row>
            <Col
              style={{
                maxHeight: "350px",
                overflowY: "auto",
                paddingRight: "15px",
              }}
            >
              <ListGroup
                className="cart-list"
                style={{
                  paddingBottom: "2.5%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {cartItems.map((item, index) => (
                  <ListGroupItem key={item.id}>
                    <Col>
                      <span>{item.name}</span>
                    </Col>
                    <Col style={{ justifyContent: "end", display: "flex" }}>
                      <span>{item.price}</span>
                      <span>
                        <button
                          onClick={() => decreaseQuantity(item)}
                          className="cart-button"
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                      </span>
                      <span>{item.quantity}</span>
                      <span>
                        <button
                          onClick={() => increaseQuantity(item)}
                          className="cart-button"
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </span>
                    </Col>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
          </Container>
        )}
        <h3>Total Price: {calculateTotalPrice().toFixed(2)} $</h3>
      </Row>
      {show && (
        <Checkout
          handleClose={handleClose}
          handleShow={handleShow}
          cartItems={cartItems}
          calculateTotalPrice={calculateTotalPrice}
        />
      )}{" "}
    </Container>
  );
};

export default Cart;
