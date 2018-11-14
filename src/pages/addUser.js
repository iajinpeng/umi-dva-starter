import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, message } from 'antd';

const FormItem = Form.Item;

@connect()
@Form.create()
class addUser extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({
          type: 'global/saveUser',
          payload: JSON.stringify(values)
        }).then(res => {
          if (res.data.status === 1) {
            message.success(res.data.msg)
          }
        })
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="add-form">
        <FormItem>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="name" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: '请输入email!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="email" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            确定添加
          </Button>
        </FormItem>
      </Form>
    );
  }
}
export default addUser;

