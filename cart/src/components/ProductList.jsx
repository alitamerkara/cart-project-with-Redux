import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../store/slices/ProductSlice";

const ProductList = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  return (
    <div className="is-flex is-justify-content-center is-align-items-center">
      {products.length > 0 ? (
        products.map((item) => {
          return (
            <div
              className="card m-5 is-flex is-justify-content-center is-align-items-center"
              key={item.id}
            >
              <div className="card-content has-text-centered">
                <h3 className="content is-size-2 has-text-link">{item.name}</h3>
                <div className="content">Quantity: {item.quantity}</div>
                <div className="content">Price: $ {item.price}</div>
                <footer className="card-footer">
                  <a
                    href="#"
                    className="card-footer-item"
                    onClick={() => {
                      dispatch(removeItem(item.id));
                    }}
                  >
                    Remove
                  </a>
                </footer>
              </div>
            </div>
          );
        })
      ) : (
        <h1 className="is-size-2 m-5 has-text-info">The Cart is Empty</h1>
      )}
    </div>
  );
};

export default ProductList;
