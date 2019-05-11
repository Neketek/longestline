import React from "react";
import styled from 'styled-components';
import {Input as Base} from "react-generic-form";
import PropTypes from "prop-types";

const Input = styled.input`
  width: 100%;
`


class TextLine extends Base{

  onChange(e){
    super.onChange(e.target.value);
  }

  render(){
    const {
      props:{
        onFocusChange,
        ...props
      },
      onChange,
      onBlur,
      onFocus
    } = this;

    const required = {
      onChange,
      onBlur,
      onFocus
    }

    return (
        <Input {...props} {...required}></Input>
    );

  }
}


TextLine.updateDefaultProps({
  value:""
});

TextLine.updatePropTypes({
  value:PropTypes.string.isRequired
});

export default TextLine;
