import ProductCard from "../../../common/productCard/productCard";
import "./products.css";

const Products = () => {
  return (
    <main>
      <h3>Products</h3>
      <div className="products-container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </main>
  );
};

export default Products;
