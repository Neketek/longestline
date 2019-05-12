import _ from 'lodash';

class Reducer{
  constructor(){
    this.reducers = [];
  }

  add(type, reduce){
    this.reducers.push({type, reduce})
  }

  compose(defaultState={}){
    return (state=defaultState, action)=>{
      for(const reducer of this.reducers){
        if(reducer.type === action.type){
          return reducer.reduce(_.cloneDeep(state), action);
        }
      }
      return state;
    }
  }
}

export default Reducer;
