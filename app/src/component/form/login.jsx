import React from 'react';
import PropTypes from 'prop-types';
import {Form as Base} from 'react-generic-form';

import Rule from 'common/component/form/rule.jsx';
import Text from 'common/component/input/text.jsx';


class Login extends Base{
  form(){
    const {
      Field,
      Errors,
    } = this;

    return (
      <form>
        <label>Login</label>
        <Field>
          <Text name="email"/>
        </Field>
        <label>Password</label>
        <Field>
          <Text name="password" type="password"/>
        </Field>
      </form>
    );

  }
}


Login.updateDefaultProps({
  name:"login",
  value:{
    name:"",
    password:""
  }
});

Login.updatePropTypes({
  value:PropTypes.shape({
    name:PropTypes.string.isRequired,
    password:PropTypes.string.isRequired
  })
});


export default Login;
