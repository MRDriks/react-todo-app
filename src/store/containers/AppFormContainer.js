import { connect } from 'react-redux';
import { addTodo, changeInputValue} from '../actions';
import AppForm from '../../components/AppForm';

const mapStateToProps = (state) => {
  return {
    inputValue: state.formReducer.inputValue
  }
}

const mapActionsToProps = {addTodo, changeInputValue}

export default connect(mapStateToProps, mapActionsToProps)(AppForm);