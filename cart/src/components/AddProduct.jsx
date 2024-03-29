import React from "react";
import {
  changeName,
  changeQuantity,
  changePrice,
} from "../store/slices/ItemSlice";
import { useSelector, useDispatch } from "react-redux";
import { addingProduct } from "../store/slices/ProductSlice";

const AddProduct = () => {
  const dispatch = useDispatch();
  const { productName, quantity, price, products } = useSelector((state) => {
    return {
      productName: state.item.productName,
      quantity: state.item.quantity,
      price: state.item.price,
      products: state.product.products,
    };
  });

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addingProduct({ productName, quantity, price }));
  };
  return (
    <div>
      <form className="is-flex is-justify-content-center is-align-items-center mt-6">
        <div className="mr-5 is-flex">
          <label>Product Name</label>
          <input
            className="input ml-3"
            value={productName}
            onChange={(e) => {
              dispatch(changeName(e.target.value));
            }}
          />
        </div>
        <div className="mr-5 is-flex">
          <label>Quantity</label>
          <input
            type="number"
            className="input ml-3"
            value={quantity}
            onChange={(e) => {
              dispatch(changeQuantity(parseInt(e.target.value)));
            }}
          />
        </div>
        <div className="mr-5 is-flex">
          <label>Price</label>
          <input
            type="number"
            className="input ml-3"
            value={price}
            onChange={(e) => {
              dispatch(changePrice(parseInt(e.target.value)));
            }}
          />
        </div>
        <button className="button" onClick={handleClick}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
