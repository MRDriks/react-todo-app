import { connect } from 'react-redux';
import { updateTodo, removeTodo, showModal, setTodoCompletedStatus } from '../actions';
import TodoList from '../../components/TodoList';

const mapStateToProps = (state) => {
  return {
    todos: state.todoReducer.todos
  }
} 

const mapActionsToProps = {updateTodo, removeTodo, showModal, setTodoCompletedStatus}

export default connect(mapStateToProps, mapActionsToProps)(TodoList);