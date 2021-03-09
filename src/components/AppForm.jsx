import React from 'react';
import { Form, Button } from 'react-bootstrap';

const AppForm = ({ addTodo, changeInputValue, inputValue}) => {
  function handleFormSubmit(event) {
    event.preventDefault();

    addTodo();
    changeInputValue('');
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <Form.Control 
          onChange={(e) => changeInputValue(e.target.value)}
          value={inputValue}
          type="text" 
          placeholder="Add todo" 
          autoComplete="off" 
          required 
        />
      </div>
      <Button variant="primary" type="submit">
        Add new todo
      </Button>
    </Form>
  );
}

export default AppForm;