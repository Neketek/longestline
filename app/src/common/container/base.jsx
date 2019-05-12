import React from 'react';
import {connect} from 'react-redux';


class ContainerBase extends React.Component{
  static mapDispatchToProps(dispatch, ownProps){
    return {};
  }

  static mapStateToProps(state, ownProps){
    return {};
  }

  static connect(){
    const Connected = connect(
      this.mapStateToProps,
      this.mapDispatchToProps
    )(this);
    Connected.defaultProps = this.defaultProps;
    Connected.propTypes = this.propTypes;
    return Connected;
  }
}


export default ContainerBase;
