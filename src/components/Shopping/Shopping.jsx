import React, { useState } from "react";
import Categories from "../Categories/Categories";
import Cart from "../Cart/Cart";
import Sidebar from "../Sidebar/Sidebar";
import { addToCart } from "../../../utilities/Cart";
import "./Shopping.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const ProductList = () => {
  const products = [
    {
      id: 0,
      name: "Eggs",
      category: "Grocery",
      price: 9.99,
      image: "https://placehold.co/250",
      desc: "Product's description",
    },
    {
      id: 1,
      name: "Chicken",
      category: "Meat",
      price: 14.99,
      image: "https://placehold.co/250",
      desc: "Product's description",
    },
    {
      id: 2,
      name: "Shampoo",
      category: "Household Essentials",
      price: 19.99,
      image: "https://placehold.co/250",
      desc: "Product's description",
    },
    {
      id: 3,
      name: "Bananas",
      category: "Fruit and Vegetable",
      price: 12.99,
      image: "https://placehold.co/250",
      desc: "Product's description",
    },
    {
      id: 5,
      name: "Biscuits",
      category: "Grocery",
      price: 9.99,
      image: "https://placehold.co/250",
      desc: "Product's description",
    },
    {
      id: 6,
      name: "Chips",
      category: "Grocery",
      price: 9.99,
      image: "https://placehold.co/250",
      desc: "Product's description",
    },
    {
      id: 7,
      name: "Butter",
      category: "Grocery",
      price: 9.99,
      image: "https://placehold.co/250",
      desc: "Product's description",
    },
    {
      id: 8,
      name: "Marmelade",
      category: "Grocery",
      price: 9.99,
      image: "https://placehold.co/250",
      desc: "Product's description",
    },
    {
      id: 9,
      name: "Flour",
      category: "Grocery",
      price: 9.99,
      image: "https://placehold.co/250",
      desc: "Product's description",
    },
    {
      id: 10,
      name: "Sugar",
      category: "Grocery",
      price: 9.99,
      image: "https://placehold.co/250",
      desc: "Product's description",
    },
  ];

  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentProductIndex(0); // Reset the currentProductIndex when category changes
  };

  const handleAddToCart = (product) => {
    const roundedPrice = Number(product.price.toFixed(2));
    addToCart({ ...product, price: roundedPrice }, cartItems, setCartItems);
  };

  const handleNextItem = () => {
    setCurrentProductIndex(
      (prevIndex) => (prevIndex + 1) % filteredProducts.length
    );
  };

  const handlePreviousItem = () => {
    if (currentProductIndex > 0) {
      setCurrentProductIndex(
        (prevIndex) => (prevIndex - 1) % filteredProducts.length
      );
    }
  };

  const categories = [
    "All",
    "Grocery",
    "Household Essentials",
    "Fruit and Vegetable",
    "Meat",
  ];

  return (
    <Container
      className="main-app"
      style={{
        overflow: "hidden",
        padding: "2.5%",
      }}
    >
      <div className="product-list-container">
        <Row>
          <Col sm={3} className="sidebar-container">
            <Sidebar cartItems={cartItems} addToCart={handleAddToCart} />
          </Col>
          <Col sm={6} className="product-list-content">
            <h2>Products</h2>
            <div>
              <Categories
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
              />
              {filteredProducts.length > 0 ? (
                <Container className="product-container">
                  <Row>
                    <Col key={filteredProducts[currentProductIndex].id}>
                      <h3>{filteredProducts[currentProductIndex].name}</h3>
                      <img
                        src={filteredProducts[currentProductIndex].image}
                        alt={filteredProducts[currentProductIndex].name}
                      />
                      <div style={{ fontSize: "24px" }}>
                        {filteredProducts[currentProductIndex].price} $
                      </div>
                      <Button
                        onClick={() =>
                          handleAddToCart(filteredProducts[currentProductIndex])
                        }
                      >
                        Add to Cart
                      </Button>
                      <div style={{ marginTop: "0.75rem" }}>
                        <Button
                          style={{ marginRight: "0.75rem" }}
                          onClick={handlePreviousItem}
                        >
                          Back
                        </Button>
                        <Button onClick={handleNextItem}>Next</Button>
                      </div>
                    </Col>
                    <Col>
                      <h3>Description</h3>
                      <p>{filteredProducts[currentProductIndex].desc}</p>
                    </Col>
                  </Row>
                </Container>
              ) : (
                <p>No products found in the selected category.</p>
              )}
            </div>
          </Col>
          <Col sm={3} className="cart-container">
            <Cart cartItems={cartItems} setCartItems={setCartItems} />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ProductList;
