import React from "react";
import SignUpFrom from 'component/form/signup.jsx';

const send= async (v)=>{
  const resp = await fetch(
  '/api/signup',
  {
    method:'POST',
    mode:'cors',
    headers:{
      'Content-Type':'application-json'
    },
    body:JSON.stringify(v)
  });
  console.log(await resp.text());
}


class SignUp extends React.Component{
  render(){
    return <SignUpFrom onSubmit={(v)=>send(v)}/>
  }
}


export default SignUp;
