import React, { useState } from "react";
import ModalNav from "./ModalNav";
import { Button } from "react-bootstrap";
import Checkout from "./Checkout";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleStoreSelection = (store) => {
    setSelectedStore(store);
    setIsModalOpen(false);
  };
  const resetStore = () => {
    setSelectedStore(null);
    handleCloseModal();
  };

  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        justifyContent: "space-between",
        backgroundColor: "#9BA2FF",
        padding: "20px",
      }}
    >
      <h1>Apis' Market</h1>
      <nav>{/* Add your navigation links here */}</nav>
      {selectedStore ? (
        <>
          <Button onClick={handleOpenModal}>{selectedStore}</Button>
        </>
      ) : (
        <Button onClick={handleOpenModal}>Select your store</Button>
      )}

      {isModalOpen && (
        <ModalNav
          showModal={isModalOpen}
          handleCloseModal={handleCloseModal}
          handleOpenModal={handleOpenModal}
          handleStoreSelection={handleStoreSelection}
          resetStore={resetStore}
        />
      )}
    </div>
  );
};

export default Header;
