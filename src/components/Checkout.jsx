import React, { useState } from "react";
import { Offcanvas, Form, Button } from "react-bootstrap";

const Checkout = ({
  handleClose,
  handleShow,
  cartItems,
  calculateTotalPrice,
}) => {
  const [show, setShow] = useState(true);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here, e.g., send the delivery details to the server
    console.log("Name:", name);
    console.log("Address:", address);
    // Reset the form fields
    setName("");
    setAddress("");
    // Show the thank you message
    setOrderPlaced(true);
  };

  const handleRestart = () => {
    // Clear the thank you message and close the Offcanvas
    setOrderPlaced(false);
    handleClose();
  };

  return (
    <>
      <Offcanvas show={show} onHide={handleRestart}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Checkout at </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {orderPlaced ? (
            <div>
              <h4>Thank you for your order!</h4>
              <p>Your order has been placed successfully.</p>
              <Button onClick={handleRestart}>Close</Button>
            </div>
          ) : (
            <div>
              <h3>Cart Items:</h3>
              {cartItems.map((item) => (
                <div key={item.id}>
                  <p>{item.name}</p>
                  <p>Price: {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              ))}
              <h4>Total Price: {calculateTotalPrice().toFixed(2)} $</h4>

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Place Order
                </Button>
              </Form>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Checkout;
