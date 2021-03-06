import React, { useState,useEffect, useDebugValue } from 'react';

import { Table, Divider, Tag,Form, Icon, Input, Button, Checkbox,Row, Col,Modal ,Layout  } from "antd";

import ProductSettings from './Product.Settings';
import ProductServices from '../../services/products/ProductServices';
import PlaceHolder from '../PlaceHolder';
const { Header, Footer,  Content } = Layout;

const ProductList = (props)=> { 
  const [dataSource, setDataSource] = useState([]);

 
  useEffect(() => {
    if (props.user)
    {
       
      ProductServices.getAll(props.user.Authorization,0).then(response => {
      
        setDataSource(response.data.content);
      });

    }
 

}, [props.user]);

  return (
    <PlaceHolder >
          <Table dataSource={dataSource} columns={ProductSettings.productColumns} />
    </PlaceHolder>
  )
}

export default ProductList;
