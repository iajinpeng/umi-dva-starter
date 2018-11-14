/**
 * Created by jinpeng on 2018/6/28.
 */
import React from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import { Button, Table, message } from 'antd';

@connect()
class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      columns: [
        {
          title: 'id',
          dataIndex: '_id'
        },
        {
          title: 'name',
          dataIndex: 'name',
        },
        {
          title: 'email',
          dataIndex: 'email'
        },
        {
          title: '操作',
          render: (val, col) => (
            <Button type="danger" onClick={() => {
              this.handleDelete(col._id)
            }}>删除</Button>
          )
        }
      ]
    }
  }

  componentDidMount(){
    this.getUserList();
  }
  getUserList = () => {
    this.props.dispatch({
      type: 'global/getUser'
    }).then(res => {
      this.setState({list: res.data})
    })
  }

  handleDelete = (id) => {
    this.props.dispatch({
      type: 'global/delUser',
      payload: JSON.stringify({id})
    }).then(res => {
      if (res.data.status === 1) {
        message.success(res.data.msg)
        this.getUserList();
      }
    })
  }
  render(){
    return (
      <div>
        <Link to="/adduser"><Button>添加用户</Button></Link>
        <Table columns={this.state.columns} dataSource={this.state.list} rowKey={(item, index) => index} />
      </div>
    )
  }
}

export default Users
