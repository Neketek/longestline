import React from "react";
import Base from "common/container/base.jsx";
import LoginForm from "component/form/login.jsx";
import {actions} from "data/store/actions/container.jsx";


const send= async (v)=>{
  const resp = await fetch(
  '/api/login',
  {
    method:'POST',
    mode:'cors',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(v)
  });
}


class Login extends Base{
  render(){
    const {props:{onChange}} = this;
    return <LoginForm onSubmit={v=>send(v)} onChange={onChange}/>;
  }


  static mapDispatchToProps(dispatch, ownProps){
    const {name} = ownProps;
    return {
      onChange(e){
        dispatch(actions.update({name, data:e}));
      }
    }
  }

  static mapStateToProps(state, ownProps){
    const {name} = ownProps;
    return state.container[name] || {};
  }


  static defaultProps = {
    name:"login"
  }

}


export default Login.connect();
