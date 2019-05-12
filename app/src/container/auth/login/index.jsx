import React from "react";
import LoginForm from "component/form/login.jsx";

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
  console.log(await resp.text());
}


class Login extends React.Component{
  render(){
    return <LoginForm onSubmit={v=>send(v)}/>;
  }
}


export default Login;
