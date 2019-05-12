import createActions from 'data/store/utils/actions';
import PropTypes from 'prop-types';


export const {actions, types} = createActions(
  {
    update:{
      propTypes:{
        name:PropTypes.string.isRequired,
        data:PropTypes.any.isRequired
      }
    },
    delete:{
      propTypes:{
        name:PropTypes.string.isRequired
      }
    }
  },
  {
    prefix:"container"
  }
);
