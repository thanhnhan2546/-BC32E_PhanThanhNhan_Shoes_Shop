import React, { Component } from "react";

export default class ProductItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item, changeDetail } = this.props;
    return (
      <div
        className="card"
        style={{ cursor: "pointer", height: "450px" }}
        onClick={() => {
          changeDetail(item);
        }}
      >
        <img src={item.image} alt={item.name} />
        <div className="card-body">
          <h5 style={{ height: "48px" }}>{item.name}</h5>
          <p>{item.price} $</p>
          <button className="btn btn-success">Add to Cart</button>
        </div>
      </div>
    );
  }
}
