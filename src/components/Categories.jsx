import React from "react";
import { Container } from "react-bootstrap";
import "./Categories.css";

const Categories = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <Container>
      <div className="category-container" style={{ border: "none" }}>
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => onCategoryChange(category)}
            disabled={selectedCategory === category}
          >
            {category}
          </button>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
