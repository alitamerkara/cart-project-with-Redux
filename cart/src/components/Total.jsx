import React from "react";
import { useSelector } from "react-redux";

const Total = () => {
  const { total } = useSelector((state) => state.product);
  return (
    <nav class="level">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Total</p>
          <p class="title">$ {total}</p>
        </div>
      </div>
    </nav>
  );
};

export default Total;
