import React from "react";
import { Form, Icon, Input, Button, Checkbox,Row, Col,Modal ,Layout  } from "antd";




import AuthServices from "../../services/auth/AuthServices";

const { Header, Footer,  Content } = Layout;

class NormalLoginForm extends React.Component {
  state = { Modavisible: false };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        AuthServices.doLogin(values).then(response => {
            this.props.setUser(response.data);
        }).catch(error => {
          Modal.error({ title: 'Error',  content: error.response.data.error_description});
        });
        ;        console.log("Received values of form: ", values);
      }
    });
  };
  toggleModal = () => {
    this.setState({
      Modavisible: !this.state.Modavisible,
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
        </Header>
        <Content>
          <Row type="flex">
            <Col span={9} order={1}>
            <Modal
          title="Modal"
          visible={this.state.Modavisible}
          onOk={this.toggleModal}
          okText="Ok"
        />

            </Col>
            <Col span={6} order={2}>
              <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                  {getFieldDecorator("username", {
                    rules: [
                      { required: true, message: "Please input your username!" }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="Username"
                    />
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator("password", {
                    rules: [
                      { required: true, message: "Please input your Password!" }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      type="password"
                      placeholder="Password"
                    />
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator("remember", {
                    valuePropName: "checked",
                    initialValue: true
                  })(<Checkbox>Remember me</Checkbox>)}
                  <a className="login-form-forgot" href="">
                    Forgot password
                  </a>
                  <br />
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Log in
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

const LoginComponent = Form.create({ name: "normal_login" })(NormalLoginForm);
export default LoginComponent;
