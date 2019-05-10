import React from 'react';
import PropTypes from 'prop-types';
import {Form as Base} from 'react-generic-form';


import Rule from 'common/component/form/rule.jsx';
import Text from 'common/component/input/text.jsx';


function SubmitButton(){

  const {
    props:{
      onSubmit
    },
    state:{
      error,
      value
    }
  } = this;

  if(this.constructor.isValid(error)){
    return (
      <button onClick={()=>onSubmit(value)}>Submit</button>
    );
  }

  return null;
}

class Login extends Base{

  constructor(props){
    super(props);
    this.SubmitButton=props.onSubmit?SubmitButton.bind(this):()=>null;
  }

  form(){
    const {
      Field,
      Errors,
      SubmitButton
    } = this;

    return (
      <div>
        <label>Login</label>
        <Field>
          <Text name="email"/>
        </Field>
        <label>Password</label>
        <Field>
          <Text name="password" type="password"/>
        </Field>
        <SubmitButton/>
      </div>
    );

  }
}


Login.updateDefaultProps({
  name:"login",
  value:{
    name:"",
    password:""
  },
  rule:{
    error:{
      name:[]
    }
  }
});

Login.updatePropTypes({
  value:PropTypes.shape({
    name:PropTypes.string.isRequired,
    password:PropTypes.string.isRequired
  })
});


export default Login;
