import React, { useState } from "react";
import Categories from "./Categories";
import Cart from "./Cart";
import Sidebar from "./Sidebar";
import { addToCart } from "../../utilities/Cart";
import "./ProductList.scss";
import { Container, Row, Col } from "react-bootstrap";

const ProductList = () => {
  const products = [
    {
      id: 0,
      name: "1 ",
      category: "Grocery",
      price: 9.99,
      image: "https://placehold.co/100",
    },
    {
      id: 1,
      name: "Product 2",
      category: "Meat",
      price: 14.99,
      image: "https://placehold.co/100",
    },
    {
      id: 2,
      name: "Product 3",
      category: "Household Essentials",
      price: 19.99,
      image: "https://placehold.co/100",
    },
    {
      id: 3,
      name: "Product 4",
      category: "Fruit and Vegetable",
      price: 12.99,
      image: "https://placehold.co/100",
    },
    {
      id: 5,
      name: "Product 1 asdaassa",
      category: "Grocery",
      price: 9.99,
      image: "https://placehold.co/100",
    },
    {
      id: 6,
      name: "Product 1",
      category: "Grocery",
      price: 9.99,
      image: "https://placehold.co/100",
    },
    {
      id: 7,
      name: "Product 7",
      category: "Grocery",
      price: 9.99,
      image: "https://placehold.co/100",
    },
    {
      id: 8,
      name: "Product 8",
      category: "Grocery",
      price: 9.99,
      image: "https://placehold.co/100",
    },
    {
      id: 9,
      name: "Product 9",
      category: "Grocery",
      price: 9.99,
      image: "https://placehold.co/100",
    },
    {
      id: 10,
      name: "Product 10",
      category: "Grocery",
      price: 9.99,
      image: "https://placehold.co/100",
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
                    <h3>{filteredProducts[currentProductIndex].name}</h3>
                    <Col key={filteredProducts[currentProductIndex].id}>
                      <button
                        className="product-nav-btn"
                        onClick={handlePreviousItem}
                      >
                        Back
                      </button>
                      <img
                        src={filteredProducts[currentProductIndex].image}
                        alt={filteredProducts[currentProductIndex].name}
                      />
                      <button
                        className="product-nav-btn"
                        onClick={handleNextItem}
                      >
                        Next
                      </button>
                      <Row
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <span style={{ fontSize: "24px" }}>
                          {filteredProducts[currentProductIndex].price} $
                        </span>
                        <button
                          onClick={() =>
                            handleAddToCart(
                              filteredProducts[currentProductIndex]
                            )
                          }
                        >
                          Add to Cart
                        </button>
                      </Row>
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
