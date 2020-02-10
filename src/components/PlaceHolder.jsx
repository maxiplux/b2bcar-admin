import React, {useState, useEffect, useDebugValue} from 'react';
import {
    Table,
    Divider,
    Tag,
    Form,
    Icon,
    Input,
    Button,
    Checkbox,
    Row,
    Col,
    Modal,
    Layout
} from "antd";
const {Header, Footer, Content} = Layout;

const PlaceHolder = (props) => {
    
    return (<>

        <Layout  >
            <Header>
                
            </Header>
            <Content
             style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280,
              }}
            >
            <Row >
                        <Col span={5}  ></Col>
                        <Col span={18}  >{props.children}</Col>
            </Row>
            </Content>
            </Layout>

        </>);
}
export default PlaceHolder;
