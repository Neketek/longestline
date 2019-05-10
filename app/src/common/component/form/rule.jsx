import {createRule} from "react-generic-form";



const isEmpty=list=>list.length==0;

export const list={
  min:createRule(({value, params:{lim}})=>value.length>=lim),
  max:createRule(({value, params:{lim}})=>value.length<=lim),
  empty:createRule(({value})=>isEmpty(value))
};


export default {
  list
};
