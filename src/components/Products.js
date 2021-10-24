import React, { Component } from "react";
import {NavLink, Route} from 'react-router-dom';
import Product from "./Product";
class Products extends Component {
  render() {
    var products = [
      {
        id: "1",
        slug: 'iphone',
        name: "Iphone 12",
        price: "18.000.000 VNĐ",
      },
      {
        id: "2",
        slug: 'samsung',
        name: "Samsung M51",
        price: "10.000.000 VNĐ",
      },
      {
        id: "3",
        slug: 'oppo',
        name: "OPPO A61",
        price: "8.500.000 VNĐ",
      },
    ];

    var {match} = this.props;
    var url = match.url;

    var result = products.map((product, index) => {
      return (
        <NavLink to={`${url}/${product.slug}`} key={index}>
          <li className="list-group-item" >
            {product.id} - {product.name} - {product.priceƯ}
          </li>
        </NavLink>
      );
    });

    var {location} = this.props;
    console.log(location);
    return (
      <div className="container">
        <h1>Danh sách sản phẩm</h1>

        <div className="row">
          <ul className="list-group">{result}</ul>
        </div>

        <div className="row">
            <Route path="/products/:name" component={Product}/>
        </div>
      </div>
    );
  }
}

export default Products;
