import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalNav = ({
  showModal,
  handleCloseModal,
  handleStoreSelection,
  selectedStore,
  resetStore,
}) => {
  const stores = ["Store 1", "Store 2", "Store 3"];

  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title>Apis' Market Locations : {selectedStore}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Choose your store:</p>
          <ListGroup style={{ cursor: "pointer" }}>
            {stores.map((store) => (
              <ListGroupItem
                key={store}
                onClick={() => handleStoreSelection(store)}
              >
                {store}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={resetStore}>
            Reset
          </button>
          <button variant="secondary" onClick={handleCloseModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalNav;
