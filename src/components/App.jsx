import React from 'react';
import AppTitle from './AppTitle';
import AppFormContainer from '../store/containers/AppFormContainer';
import TodoListContainer from '../store/containers/TodoListContainer';
import TodoCounterContainer from '../store/containers/TodoCounterContainer';
import AppModalContainer from '../store/containers/AppModalContainer';
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <Container>
      <AppTitle text="React - Redux todo app" />
      <AppFormContainer />
      <TodoListContainer />
      <TodoCounterContainer />
      <AppModalContainer />
    </Container>
  );
}

export default App;
