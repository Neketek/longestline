import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: auto;
  display: block;
  align-self: center;
`

export default function(){

  if(!this.props.onSubmit){
    return null;
  }

  const {
    props:{
      onSubmit
    },
    state:{
      error,
      value
    }
  } = this;

  const props = {
    disabled:!this.constructor.isValid(error),
    onClick:()=>onSubmit(value)
  }

  return <Button {...props}>Submit</Button>;
}
