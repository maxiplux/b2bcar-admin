import React from "react";

import About from "../About";
import Home from "../Home";
import Topics from "../Topics";

import {   Switch, Route  } from "react-router-dom";
import ProductList from "../components/products/ProductList/ProductList";
import ProductEdit from "../components/products/ProductEdit";
export default function ShareComponents(props) {
 
  //todo:Handler all using json conf
    return (<>
    
                <Switch>
                  <Route path="/about"><About {...props} /></Route>
                  <Route path="/topics"><Topics {...props}  /></Route>
                
                  <Route path="/products/edit/:id"><ProductEdit {...props}  /></Route>
                  <Route path="/products/delete/:id"><ProductEdit {...props}  /></Route>
                  <Route path="/products"><ProductList {...props}  /></Route>
                  <Route path="/"><Home  {...props} /></Route>
                </Switch>
    </>);
}