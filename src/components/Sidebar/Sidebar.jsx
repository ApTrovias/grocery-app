import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const Sidebar = ({ cartItems, addToCart }) => {
  const productsDiscounted = [
    { id: 0, name: "Bread", category: "Category A", price: 9.99 },
    { id: 1, name: "Milk", category: "Category B", price: 14.99 },
    { id: 2, name: "Detergent", category: "Category A", price: 19.99 },
    { id: 3, name: "Shampoo", category: "Category C", price: 12.99 },
    { id: 5, name: "Pork", category: "Category C", price: 21.0 },
    { id: 6, name: "Fish", category: "Category A", price: 9.99 },
  ];

  return (
    <div>
      <h3>You might like..</h3>
      <ListGroup>
        {productsDiscounted.map((item) => (
          <ListGroupItem key={item.id}>
            <div className="product-name">{item.name}</div>
            <span>
              <button
                className="add-to-cart-button"
                onClick={() => addToCart(item, cartItems)}
              >
                +
              </button>
            </span>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default Sidebar;
