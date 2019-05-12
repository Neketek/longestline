import {createStore} from 'redux';
import rootReducer from './reducer/root';

export default ()=>{
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
};
