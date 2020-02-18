import React, {useEffect, useState} from 'react';

import {AutoComplete, Button, Form, Input, Select, Radio, Table, InputNumber} from 'antd';


import {useParams} from "react-router-dom";
import ProductServices from "../../services/products/ProductServices";
import ProductSettings from "./Product.Settings";
import PlaceHolder from "../PlaceHolder";

const {Option} = Select;
const AutoCompleteOption = AutoComplete.Option;

const ProductEditBase = (props) => {

  let {id} = useParams();
  const { getFieldDecorator } =props.form;

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  const [dataSource, setDataSource] = useState({});
  const formLayout = 'horizontal';
  const formItemLayout = {labelCol: {span: 4}, wrapperCol: {span: 14}};
  const buttonItemLayout = {
    wrapperCol: {span: 14, offset: 4},
  };

  useEffect(() => {
    if (id) {

      ProductServices.getEdit(props.user.Authorization, id).then(response => {

        setDataSource(response.data);
      });

    }


  }, [id]);

  return (<>


    <PlaceHolder >
      <Form layout={formLayout} onSubmit={handleSubmit}>

        <Form.Item label="Name" {...formItemLayout}>
{getFieldDecorator('name', {initialValue: dataSource.name ,rules: [{required: true, message: 'Please input   name'}],})(<Input placeholder="Please input   name" />)}
        </Form.Item>

        {getFieldDecorator('Category', {
          rules: [{ required: true, message: 'Please select your Category!' }],
        })(
            <Select placeholder="Please select a country">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>,
        )}

        <Form.Item label="quality" {...formItemLayout}>
          {getFieldDecorator('quality', {initialValue: dataSource.quality ,rules: [{required: true, message: 'Please input   quality'}],})(<Input placeholder="Please input quality" />)}
        </Form.Item>


        <Form.Item label="price" {...formItemLayout}>
          {getFieldDecorator('price', {initialValue: dataSource.price ,rules: [{required: true, message: 'Please input your price'}],})(<Input placeholder="Please input your price" />)}
        </Form.Item>




        <Form.Item {...buttonItemLayout}>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </PlaceHolder>




  </>);
}
const ProductEdit = Form.create({ name: 'validate_other' })(ProductEditBase);
export default ProductEdit;
