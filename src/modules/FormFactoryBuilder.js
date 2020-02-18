import React, {useEffect, useState} from 'react';

import {AutoComplete, Button, Form, Input, Select, Radio, Table, InputNumber} from 'antd';


const {Option} = Select;
const AutoCompleteOption = AutoComplete.Option;
const FormFactoryBuilder = (props) => {
    const { getFieldDecorator } =props.form;
    {
        getFieldDecorator('name', {initialValue: props.dataSource.name ,rules: [{required: true, message: 'Please input   name'}],})
        (<Input placeholder="Please input   name" />)
    }


    return (<></>)
}
export default  ProductEditBase;
