import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


import AuthContainer from "container/auth/index.jsx";

class Index extends React.Component{
  render(){
    return (
      <Router>
        <Route path="/auth" component={AuthContainer}/>
      </Router>
    );
  }
}


export default Index;
