import {types} from 'data/store/actions/container.jsx';
import Reducer from 'data/store/utils/reducer.jsx';

const reducer = new Reducer();

reducer.add(
  types.update,
  (state, {name, data})=>{
    state[name] = data;
    return state;
  }
);

reducer.add(
  types.delete,
  (state, {name})=>{
    state[name] = undefined;
    return state;
  }
);


export default reducer.compose();
