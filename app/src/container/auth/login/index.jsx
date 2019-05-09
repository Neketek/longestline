import React from "react";
import LoginForm from "component/form/login.jsx";

class Login extends React.Component{
  render(){
    return <LoginForm onSubmit={v=>console.log(v)}/>;
  }
}


export default Login;
