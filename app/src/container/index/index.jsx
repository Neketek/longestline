import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthContainer from "container/auth/index.jsx";

class Index extends React.Component{
  render(){
    return (
      <Switch>
        <Route path="/auth" component={AuthContainer}/>
      </Switch>
    );
  }
}


export default Index;
