import React, { Component } from "react";

class Product extends Component {
  render() {
    var {match} = this.props;
    var name = match.params.name;
    return (
        <div>
          <h1>
            Đây là chi tiết sản phẩm: {name}
          </h1>
        </div>
    );
  }
}

export default Product;
