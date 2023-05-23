import React, { useState } from "react";
import Shopping from "./components/Shopping/Shopping";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import { Container, Row } from "react-bootstrap";
import Fresh from "./components/Fresh";

const App = () => {
  return (
    <Container fluid className="app">
      <Row>
        <Header />
      </Row>
      <Row>
        <Shopping />
        <Fresh />
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
};

export default App;
