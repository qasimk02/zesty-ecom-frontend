import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../state/Cart/action";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleUpdateCartItem = (num) => {
    const data = {
      productId: item?.product?.productId,
      quantity: item.quantity + num,
      size: item?.size,
    };
    dispatch(updateCartItem(data));
  };

  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(item?.cartItemId));
  };

  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[9rem] h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={item?.product?.imageName}
            alt="mens_shirt"
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item?.product?.name}</p>
          <p className="opacity-70">Size: {item?.size?.toUpperCase()}</p>
          <p className="opacity-70 mt-2">Seller: {item?.product?.brand}</p>
          <div className="flex space-x-4 items-center text-gray-900 pt-7">
            <p className="font-semibold">${item?.totalDiscountedPrice}</p>
            <p className="opacity-50 line-through">${item?.totalPrice}</p>
            <p className="text-green-600 font-semibold">
              {(
                ((item?.totalPrice - item?.totalDiscountedPrice) * 100) /
                item?.totalPrice
              ).toFixed(1)}
              % Off
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center lg:space-x-8 pt-4">
          <div className="flex items-center space-x-2">
            <IconButton
              onClick={() => handleUpdateCartItem(-1)}
              disabled={item?.quantity <= 1}
            >
              <RemoveCircleOutlineIcon />
            </IconButton>
            <span className="py-1 px-6 border rounded-sm">
              {item?.quantity}
            </span>
            <IconButton
              sx={{ color: "RGB(145,85,253)" }}
              onClick={() => handleUpdateCartItem(1)}
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
          <div>
            <Button
              sx={{ color: "RGB(145,85,253)" }}
              onClick={handleRemoveCartItem}
            >
              remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
