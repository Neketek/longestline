import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginContainer from "container/auth/login/index.jsx";
import SignUpContainer from "container/auth/signup/index.jsx";


class Auth extends React.Component{
  render(){
    const {
      props:{
        match
      }
    } = this;

    return (
      <Switch>
        <Route path={`${match.url}/login`} component={LoginContainer}/>
        <Route path={`${match.url}/signup`} component={SignUpContainer}/>
        <Route render={()=><Redirect to={`${match.url}/login`}/>}/>
      </Switch>
    );

  }
}


export default Auth;
