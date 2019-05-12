import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Form as Base} from 'react-generic-form';
import {ContainerVertical, VirtualBlock} from 'common/component/form/layout.jsx'

import Rule from 'common/component/form/rule.jsx';
import Text from 'common/component/form/input/text.jsx';
import SubmitButton from 'common/component/form/input/submit-button.jsx';


function PasswordConfirmation(){

  const {
    Field,
    state:{
      error:{
        password
      }
    }
  } = this;

  if (!this.constructor.isValid(password)){
    return null;
  }

  return (
    <VirtualBlock>
      <label>Confirm Password</label>
      <Field>
        <Text name="passwordConfirmation" type="password"/>
      </Field>
    </VirtualBlock>
  );
}


class SignUp extends Base{

  constructor(props){
    super(props);
    this.SubmitButton = SubmitButton.bind(this);
    this.PasswordConfirmation = PasswordConfirmation.bind(this);
  }

  form(){
    const {
      Field,
      SubmitButton,
      PasswordConfirmation
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
        <PasswordConfirmation/>
        <SubmitButton/>
      </ContainerVertical>
    );

  }
}


SignUp.updateDefaultProps({
  name:"login",
  value:{
    email:"",
    password:"",
    passwordConfirmation:""
  },
  rule:{
    error:{
      email:[
        Rule.list.empty().not().m(()=>`This field can't be empty`)
      ],
      password:[
        Rule.list.empty().not().m(()=>`This field can't be empty`)
      ],
      passwordConfirmation:[
        Rule.obj.equals().p({field:'password'}).m(()=>`Password and confirmation do not match`)
      ]
    },
    warning:{}
  }
});

SignUp.updatePropTypes({
  value:PropTypes.shape({
    name:PropTypes.string.isRequired,
    password:PropTypes.string.isRequired,
    passwordConfirmation:PropTypes.string.isRequired
  })
});


export default SignUp;
