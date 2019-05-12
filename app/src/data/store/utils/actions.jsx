import _ from 'lodash';
import PropTypes from 'prop-types';

export default function(
  data,
  options={},
){
  const prefix = options.prefix || "";
  const actions = {};
  const types = {};

  for(const key in data){
    const type = `${_.toUpper(prefix)}_${_.toUpper(_.snakeCase(key))}`;
    const {propTypes={}, defaultProps={}} = data[key];
    actions[key] = (props={})=>{
      PropTypes.checkPropTypes(propTypes, props, 'prop', key);
      return Object.assign(defaultProps, props, {type});
    }
    types[key]=type;
  }

  return {actions, types};
}
