import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ProductList from "./components/products";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container, Row } from "react-bootstrap";
import Fresh from "./components/Fresh";

const App = () => {
  return (
    <Container fluid className="app">
      <Row>
        <Header />
      </Row>
      <Row>
        <ProductList />
        <Fresh />
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
};

export default App;
