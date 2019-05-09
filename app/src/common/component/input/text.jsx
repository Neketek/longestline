import React from "react";
import {Input as Base} from "react-generic-form";
import PropTypes from "prop-types";


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
        <input {...props} {...required}></input>
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
