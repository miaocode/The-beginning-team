import "./productDetails.css";

const ProductDetails = ({
  category,
  url,
  productName,
  price,
  descrioption,
}) => {
  return (
    <div className="product-details">
      <h3>Product Detail</h3>
      <div className="product-content">
        <img
          className="product-image"
          src="https://akns-images.eonline.com/eol_images/Entire_Site/202113/rs_640x640-210203114453-1200-glasses.cm.2321.jpg"
          alt="glasses"
        />

        <div className="text-detail">
          <p>Category prop</p>
          <h4>Product name prop</h4>
          <p id="price">$555</p>
          <p id="out-of-stock">Out of Stock</p>
          <p id="description">
            Hundreds of hit games, one-of-a-kid experiences, live events, new
            ways to stay fit and a growing community Hundreds of hit games,
            one-of-a-kid experiences, live events, new ways to stay fit and a
            growing community
          </p>
          <button>Add To Cart</button> <button>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
