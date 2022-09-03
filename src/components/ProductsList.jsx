import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import data from "../data.json";
import ProductItem from "./ProductItem";
import ProductModal from "./ProductModal";

export default class ProductsList extends Component {
  state = {
    productDetail: "",
  };
  changeDetail = (product) => {
    this.setState({
      productDetail: product,
    });
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Shoes Shop</h1>
        {this.state.productDetail !== "" && (
          <ProductModal detail={this.state.productDetail} />
        )}
        <div class="row">
          <div className="col-2 mt-3 ">
            <p>Nike</p>
            <p>Adidas</p>
            <p>Puma</p>
            <p>Thượng Đỉnh</p>
          </div>
          <div className="col-10">
            <div className="row">
              {data.map((product, index) => {
                return (
                  <div className="col-4 mt-3" key={index}>
                    <ProductItem
                      item={product}
                      changeDetail={this.changeDetail}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
