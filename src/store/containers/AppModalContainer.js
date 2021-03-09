import { connect } from 'react-redux';
import AppModal from '../../components/AppModal';
import { hideModal, changeTextareaValue, updateTodo } from '../actions';

const mapStateToProps = (state) => {
  return {
    isVisible: state.modalReducer.isVisible,
    textareaValue: state.modalReducer.textareaValue
  }
}

const mapActionsToProps = {hideModal, changeTextareaValue, updateTodo}

export default connect(mapStateToProps, mapActionsToProps)(AppModal);