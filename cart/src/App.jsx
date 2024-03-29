import "./App.css";
import AddProduct from "./components/AddProduct";
import SearchProduct from "./components/SearchProduct";
import ProductList from "./components/ProductList";
import Total from "./components/Total";
import { useEffect } from "react";
import { calculateTotal } from "./store/slices/ProductSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [products]);
  return (
    <>
      <AddProduct />
      <SearchProduct />
      <ProductList />
      <Total />
    </>
  );
}

export default App;
