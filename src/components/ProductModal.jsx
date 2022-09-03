import React, { Component } from "react";

export default class ProductModal extends Component {
  render() {
    const { detail } = this.props;
    return (
      <div className="row border py-3">
        <div className="col-4">
          <img className="img-fluid" src={detail.image} alt="..." />
        </div>
        <div className="col-8">
          <h3>{detail.name}</h3>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td>Alias:</td>
                <td>{detail.alias}</td>
              </tr>
              <tr>
                <td>Price:</td>
                <td>{detail.price}</td>
              </tr>
              <tr>
                <td>Description:</td>
                <td>{detail.description}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
