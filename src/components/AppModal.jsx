import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const AppModal = ({ isVisible, hideModal, textareaValue, changeTextareaValue, updateTodo }) => {
  function handleConfirmBtnClick() {
    updateTodo();
    hideModal();
  }

  return (
    <Modal show={isVisible} onHide={hideModal}>
      <Modal.Header closeButton>
        <Modal.Title>Update todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control 
          as="textarea" 
          rows={3} 
          value={textareaValue} 
          onChange={(e) => changeTextareaValue(e.target.value)} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleConfirmBtnClick}>
          Confirm update
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AppModal;