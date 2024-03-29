import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSearch } from "../store/slices/ProductSlice";

const SearchProduct = () => {
  const dispatch = useDispatch();
  const { products, searchItem } = useSelector((state) => {
    return {
      products: state.product.products,
      searchItem: state.product.searchItem,
    };
  });

  return (
    <nav class=" mt-6 ">
      <div class=" is-flex is-justify-content-space-around">
        <div class="level-item">
          <p class="subtitle is-5">
            <strong>MyCart</strong>
          </p>
        </div>
        <div class="level-item">
          <div class="field has-addons">
            <p class="control">
              <input
                class="input"
                type="text"
                placeholder="Find a product"
                onChange={(e) => {
                  dispatch(changeSearch(e.target.value));
                }}
                value={searchItem}
              />
            </p>
            <p class="control">
              <button class="button">Search</button>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SearchProduct;
