import { useState } from "react";
import MyHeader from "../../common/header/header";
import SignIn from "../signIn/signInl";
import Footer from "../../common/footer/footer";
import FormDisabledDemo from "../product/createProduct/createProduct";
import ProductDetails from "../../common/productDetails/productDetails";
import Products from "../product/products/products";

const Home = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <MyHeader setVisible={setVisible} />
      <SignIn visible={visible} setVisible={setVisible} />
      {/* <FormDisabledDemo /> */}
      {/* <ProductDetails /> */}
      <Products />
      <Footer />
    </>
  );
};

export default Home;
