import {createRule} from 'react-generic-form';
import _ from 'lodash';


export const list={
  min:createRule(({value, params:{lim}})=>value.length>=lim),
  max:createRule(({value, params:{lim}})=>value.length<=lim),
  empty:createRule(({value})=>value.length===0)
};


export const obj={
  equals:createRule(({value, state,params:{field:f, value:v}})=>{
    return _.isEqual(value, v!==undefined?v:state.value[f]);
  })
}


export default {
  list,
  obj
};
