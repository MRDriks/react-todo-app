import { connect } from 'react-redux';
import TodoCounter from '../../components/TodoCounter';
import { getQuantityOfActiveTodos } from '../selectors';

const mapStateToProps = (state) => {
  return {
    counter: getQuantityOfActiveTodos(state)
  }
}

export default connect(mapStateToProps, null)(TodoCounter);