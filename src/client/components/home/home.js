import { useState } from "react";
import { Router, Route } from "express";
import MyHeader from "../../common/header/header";
import SignIn from "../signIn/signInl";
import Footer from "../../common/footer/footer";
import CreateProduct from "../product/createProduct/createProduct";
import EditProduct from "../product/editProduct/editProduct";
import ProductDetails from "../../common/productDetails/productDetails";
import Products from "../product/products/products";
import "./home.css";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [cartQty, setCartQty] = useState(0);
  const [cartSum, setCartSum] = useState(0);

  return (
    <div className="body">
      <MyHeader setVisible={setVisible} cartQty={cartQty} cartSum={cartSum} />
      <SignIn visible={visible} setVisible={setVisible} />
      <Router>
        <Route
          path="/products"
          element={
            <Products
              cartQty={cartQty}
              setCartQty={setCartQty}
              setCartSum={setCartSum}
            />
          }
        />
      </Router>
      <Footer />
    </div>
  );
};

export default Home;
