/**
 * Created by jinpeng on 2018/6/28.
 */
import React from 'react';
import { connect } from 'dva';

@connect()
class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount(){
    this.props.dispatch({
      type: 'global/getUser'
    }).then(res => {
      this.setState({list: res.data})
    })
  }
  render(){
    return (
      <div>
        {
          this.state.list.length > 0 &&
          this.state.list.map((user, index) => (
            <div key={index}>
              <span>name: {user.name}</span>
              <span>email: {user.email}</span>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Users
