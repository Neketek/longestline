import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Form as Base} from 'react-generic-form';
import {ContainerVertical} from 'common/component/form/layout.jsx'

import Rule from 'common/component/form/rule.jsx';
import Text from 'common/component/form/input/text.jsx';
import SubmitButton from 'common/component/form/input/submit-button.jsx';

class Login extends Base{

  constructor(props){
    super(props);
    this.SubmitButton = SubmitButton.bind(this);
  }

  form(){
    const {
      Field,
      SubmitButton
    } = this;

    return (
      <ContainerVertical>
        <label>Email</label>
        <Field>
          <Text name="email"/>
        </Field>
        <label>Password</label>
        <Field>
          <Text name="password" type="password"/>
        </Field>
        <SubmitButton/>
      </ContainerVertical>
    );

  }
}


Login.updateDefaultProps({
  name:"login",
  value:{
    email:"",
    password:""
  },
  rule:{
    error:{
      email:[
        Rule.list.empty().not().m(()=>`This field can't be empty`)
      ],
      password:[
        Rule.list.empty().not().m(()=>`This field can't be empty`)
      ]
    },
    warning:{}
  }
});

Login.updatePropTypes({
  value:PropTypes.shape({
    email:PropTypes.string.isRequired,
    password:PropTypes.string.isRequired
  })
});


export default Login;
