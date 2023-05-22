import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveUserInfo = (userInfo) => {
    // Handle saving the user information as desired
    console.log(userInfo);
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        position: "relative",
        justifyContent: "end",
        backgroundColor: "#9BA2FF",
        padding: "20px",
        borderTop: "1px solid black",
      }}
    >
      <div>
        <h2>designed by rednwhite.dev</h2>
      </div>
    </div>
  );
};

export default Footer;
