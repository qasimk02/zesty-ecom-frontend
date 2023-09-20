import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.productId}`)}
      className="productCard w-[12rem] m-3 transition-all cursor-pointer"
    >
      <div className="h-[15rem] p-2">
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.imageName}
          alt="product_image"
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p>{product.description.substring(0, 30)}...</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">
            ${product.price - product.price * product.discountPercent * 0.01}
          </p>
          <p className="line-through opacity-50">${product.price}</p>
          <p className="text-green-600 font-semibold">
            {product.discountPercent}%
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
