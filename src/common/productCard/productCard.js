import "./productCard.css";

const ProductCard = () => {
  return (
    <div className="productCard-container">
      <div classNmae="product-info">
        <img
          src="https://media.wired.com/photos/62d75d34ddaaa99a1df8e61d/master/pass/Phone-Camera-Webcam-Gear-GettyImages-1241495650.jpg"
          alt=""
        />
        <p id="product-name">Product Name</p>
        <p id="product-price">$100</p>
        <div>
          <button>Add/Qty</button>
          <button>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
