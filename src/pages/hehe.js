/**
 * Created by jinpeng on 2018/6/28.
 */
import React from 'react';
import { connect } from 'dva';

class Hehe extends React.Component {

  componentDidMount(){
    this.props.dispatch({
      type: 'global/getUser'
    })
  }
  render(){
    return<div>呵呵</div>
  }
}

export default connect()(Hehe)